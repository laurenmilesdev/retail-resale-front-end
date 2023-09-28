/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Card, CardContent, SelectChangeEvent } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import Loading from '../../components/loading/Loading';
import FormActionButtons from '../../components/products/form-action-buttons/FormActionButtons';
import ProductDetails from '../../components/products/product-details/ProductDetails';
import ProductForm from '../../components/products/product-form/ProductForm';
import TextFieldInput from '../../components/text-field-input/TextFieldInput';
import SelectListInput from '../../components/select-list-input/SelectListInput';
import DatePickerInput from '../../components/date-picker-input/DatePickerInput';
import ProductModel from '../../models/products/product';
import DropdownModel from '../../models/dropdown';
import TextFieldModel from '../../models/text-field';
import SelectListModel from '../../models/select-list';
import ProductService from '../../services/product-service';
import ConditionService from '../../services/condition-service';
import CategoryService from '../../services/category-service';
import { sizeTypes } from '../../constants/size-type';
import { convertDate } from '../../utils/date';

const baseApiUrl: string = process.env.NEXT_PUBLIC_BASE_API_URL ?? '';
const productService = new ProductService(baseApiUrl);
const conditionService = new ConditionService(baseApiUrl);
const categoryService = new CategoryService(baseApiUrl);

export default function Product() {
  const { id } = useRouter().query;
  const [loaded, setLoaded] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [product, setProduct] = useState<ProductModel | undefined>();
  const [sizeTypeId, setSizeTypeId] = useState<number | undefined>();
  const [categoryId, setCategoryId] = useState<number | undefined>();
  const [categories, setCategories] = useState<DropdownModel[]>();
  const [subCategoryId, setSubCategoryId] = useState<number | undefined>();
  const [subCategories, setSubCategories] = useState<DropdownModel[]>();
  const [conditionId, setConditionId] = useState<number | undefined>();
  const [conditions, setConditions] = useState<DropdownModel[]>();
  const [purchaseDate, setPurchaseDate] = useState<Dayjs | null>();

  function handleChange(event: SelectChangeEvent) {
    const { name } = event.target;
    const { value } = event.target;

    if (name === 'sizeType') setSizeTypeId(value as unknown as number);
    if (name === 'category') setCategoryId(value as unknown as number);
    if (name === 'subCategory') setSubCategoryId(value as unknown as number);
    if (name === 'condition') setConditionId(value as unknown as number);
  }

  async function getProduct() {
    try {
      const response = await productService.getProductById(id as unknown as number);
      const newDate = response.purchaseDate ? convertDate(response.purchaseDate) : null;

      setProduct(response);
      setSizeTypeId(response.sizeType);
      setCategoryId(response.subCategory.categoryId);
      setSubCategoryId(response.subCategory.id);
      setConditionId(response.conditionId);
      setPurchaseDate(newDate ? dayjs(newDate) : null);
    } catch (error) {
      // TODO: Handle error by returning error object and notification to user
      setLoaded(true);
    } finally {
      setLoaded(true);
    }
  }

  async function getCategories() {
    try {
      const response = await categoryService.getCategories();
      const currentCategory = response.find((p) => p.id === categoryId);
      const categoriesDropdown = response.map(
        (category) => new DropdownModel(category.id, category.value)
      );
      const subCategoriesDropdown = currentCategory?.subCategories.map(
        (subCategory) => new DropdownModel(subCategory.id, subCategory.value)
      );

      setCategories(categoriesDropdown);
      setSubCategories(subCategoriesDropdown);
    } catch (error) {
      // Handle error
    }
  }

  async function getConditions() {
    try {
      const response = await conditionService.getConditions();
      const conditionsDropdown = response.map(
        (condition) => new DropdownModel(condition.id, condition.value)
      );

      setConditions(conditionsDropdown);
    } catch (error) {
      // Handle error
    }
  }

  async function getCategory() {
    try {
      if (categoryId) {
        const response = await categoryService.getCategoryById(categoryId);
        const subCategoriesDropdown = response.subCategories.map(
          (subCategory) => new DropdownModel(subCategory.id, subCategory.value)
        );

        setCategoryId(categoryId);
        setSubCategories(subCategoriesDropdown);
      }
    } catch (error) {
      // Handle error
    }
  }

  useEffect(() => {
    getProduct();
    getCategories();
    getConditions();
  }, []);

  useEffect(() => {
    getCategory();
  }, [categoryId]);

  useEffect(() => {}, [edit]);

  const textField = (name: string, value: string, multiline = false) => {
    const item = new TextFieldModel(value, name, multiline);

    return <TextFieldInput textField={item} />;
  };
  const selectListItem = (name: string, value: string, listItems: DropdownModel[]) => {
    const item = new SelectListModel(value, name, listItems);

    return <SelectListInput selectList={item} handleChange={handleChange} />;
  };

  const productFields = [
    { name: 'Name', value: product?.name, editField: textField('name', product?.name ?? '') },
    {
      name: 'Description',
      value: product?.description,
      editField: textField('description', product?.description ?? '', true),
    },
    { name: 'Size', value: product?.size, editField: textField('size', product?.size ?? '', true) },
    {
      name: 'Size Type',
      value: product?.sizeTypeValue,
      editField: selectListItem('sizeType', sizeTypeId as unknown as string, sizeTypes),
    },
    {
      name: 'Category',
      value: product?.subCategory.category.value,
      editField: selectListItem('category', categoryId as unknown as string, categories ?? []),
    },
    {
      name: 'SubCategory',
      value: product?.subCategory.value,
      editField: selectListItem(
        'subCategory',
        subCategoryId as unknown as string,
        subCategories ?? []
      ),
    },
    {
      name: 'Condition',
      value: product?.condition.value,
      editField: selectListItem('condition', conditionId as unknown as string, conditions ?? []),
    },
    { name: 'Brand', value: product?.brand, editField: textField('brand', product?.brand ?? '') },
    {
      name: 'Purchase Price',
      value: product?.purchasePrice,
      editField: textField('purchasePrice', product?.purchasePrice as unknown as string),
    },
    {
      name: 'Purchase Date',
      value: product?.purchaseDate ? convertDate(product?.purchaseDate) : null,
      editField: <DatePickerInput value={purchaseDate} setValue={setPurchaseDate} />,
    },
  ];
  const productDetails = product ? (
    <ProductDetails productFields={productFields} />
  ) : (
    <>Product not found.</>
  );
  const productForm =
    product && sizeTypeId && categoryId && subCategoryId && conditionId ? (
      <ProductForm productFields={productFields} />
    ) : (
      <>Error loading form.</>
    );

  return (
    <>
      {product && (
        <FormActionButtons
          edit={edit}
          setEdit={setEdit}
          sizeTypeId={product.sizeType}
          setSizeTypeId={setSizeTypeId}
          categoryId={product?.subCategory.categoryId}
          setCategoryId={setCategoryId}
          subCategoryId={product.subCategoryId}
          setSubCategoryId={setSubCategoryId}
          conditionId={product.conditionId}
          setConditionId={setConditionId}
        />
      )}

      <Card>
        <CardContent>
          <Loading loaded={loaded}>{edit ? productForm : productDetails}</Loading>
        </CardContent>
      </Card>
    </>
  );
}

export function getServerSideProps() {
  return {
    props: {},
  };
}
