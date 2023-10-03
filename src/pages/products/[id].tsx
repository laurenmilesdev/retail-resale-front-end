/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import dayjs, { Dayjs } from 'dayjs';
import { Card, CardContent } from '@mui/material';
import Loading from '../../components/loading/Loading';
import PageNavigationButtons from '../../components/page-navigation-buttons/PageNavigationButtons';
import ProductDetails from '../../components/products/product-details/ProductDetails';
import ProductForm from '../../components/products/product-form/ProductForm';
import ProductModel from '../../models/products/product';
import DropdownModel from '../../models/dropdown';
import ProductDetailModel from '../../models/product-detail';
import ProductService from '../../services/product-service';
import CategoryService from '../../services/category-service';
import ConditionService from '../../services/condition-service';
import { sizeTypes } from '../../constants/size-type';
import { convertDate } from '../../utils/date';

const baseApiUrl: string = process.env.NEXT_PUBLIC_BASE_API_URL ?? '';
const productService = new ProductService(baseApiUrl);
const categoryService = new CategoryService(baseApiUrl);
const conditionService = new ConditionService(baseApiUrl);

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
  const [purchaseDate, setPurchaseDate] = useState<Dayjs | null | undefined>();

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
      const subCategoriesDropdown = currentCategory?.subCategories
        ? currentCategory?.subCategories.map(
            (subCategory) => new DropdownModel(subCategory.id, subCategory.value)
          )
        : [];

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
        const subCategoriesDropdown = response.subCategories
          ? response.subCategories.map(
              (subCategory) => new DropdownModel(subCategory.id, subCategory.value)
            )
          : [];

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

  const productDetails = [
    new ProductDetailModel('Name', product?.name),
    new ProductDetailModel('Description', product?.description),
    new ProductDetailModel('Size', product?.size),
    new ProductDetailModel('Size Type', product?.sizeTypeValue),
    new ProductDetailModel('Category', product?.subCategory.category.value),
    new ProductDetailModel('SubCategory', product?.subCategory.value),
    new ProductDetailModel('Condition', product?.condition.value),
    new ProductDetailModel('Brand', product?.brand),
    new ProductDetailModel('Purchase Price', product?.purchasePrice),
    new ProductDetailModel('Purchase Date', convertDate(product?.purchaseDate ?? '')),
  ];

  return (
    <>
      {product && (
        <PageNavigationButtons
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
          <Loading loaded={loaded}>
            {edit ? (
              <ProductForm
                sizeTypeId={sizeTypeId}
                setSizeTypeId={setSizeTypeId}
                sizeTypes={sizeTypes}
                categoryId={categoryId}
                setCategoryId={setCategoryId}
                categories={categories ?? []}
                subCategoryId={subCategoryId}
                setSubCategoryId={setSubCategoryId}
                subCategories={subCategories ?? []}
                conditionId={conditionId}
                setConditionId={setConditionId}
                conditions={conditions ?? []}
                purchaseDate={purchaseDate ?? undefined}
                setPurchaseDate={setPurchaseDate}
                product={product}
              />
            ) : (
              <ProductDetails productDetails={productDetails} />
            )}
          </Loading>
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
