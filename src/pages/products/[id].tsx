/* eslint-disable @typescript-eslint/no-floating-promises */
import { InferGetServerSidePropsType } from 'next';
import { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { Card, CardContent } from '@mui/material';
import Loading from '../../components/loading/Loading';
import PageNavigationButtons from '../../components/page-navigation-buttons/PageNavigationButtons';
import ProductDetails from '../../components/products/product-details/ProductDetails';
import ProductForm from '../../components/products/product-form/ProductForm';
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

export default function Product({
  product,
  category,
  categoriesString,
  subCategoriesString,
  conditionsString,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const categories = JSON.parse(categoriesString);
  const conditions = JSON.parse(conditionsString);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [sizeTypeId, setSizeTypeId] = useState<number | undefined>();
  const [categoryId, setCategoryId] = useState<number | undefined>(category?.id);
  const [subCategoryId, setSubCategoryId] = useState<number | undefined>();
  const [subCategories, setSubCategories] = useState<DropdownModel[]>(
    JSON.parse(subCategoriesString) as DropdownModel[]
  );
  const [conditionId, setConditionId] = useState<number | undefined>();
  const [purchaseDate, setPurchaseDate] = useState<Dayjs | null | undefined>();
  const newDate = product.purchaseDate ? convertDate(product.purchaseDate) : null;

  useEffect(() => {
    setSizeTypeId(product.sizeType);
    setCategoryId(product.subCategory.categoryId);
    setSubCategoryId(product.subCategory.id);
    setConditionId(product.conditionId);
    setPurchaseDate(newDate ? dayjs(newDate) : null);

    setLoaded(true);
  }, []);

  async function getSubCategories() {
    if (categoryId) {
      const response = await categoryService.getSubCategoriesByCategoryId(categoryId);

      setSubCategories(response);
    }
  }

  useEffect(() => {
    setCategoryId(categoryId);
    getSubCategories();
  }, [categoryId]);

  useEffect(() => {}, [edit]);

  const productDetails = [
    new ProductDetailModel('Name', product.name),
    new ProductDetailModel('Description', product.description),
    new ProductDetailModel('Size', product.size),
    new ProductDetailModel('Size Type', product.sizeTypeValue),
    new ProductDetailModel('Category', product.subCategory.category.value),
    new ProductDetailModel('SubCategory', product.subCategory.value),
    new ProductDetailModel('Condition', product.condition.value),
    new ProductDetailModel('Brand', product.brand),
    new ProductDetailModel('Purchase Price', product.purchasePrice),
    new ProductDetailModel('Purchase Date', convertDate(product.purchaseDate ?? '')),
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

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  const product = await productService.getProductById(id as unknown as number);
  const categories = await categoryService.getCategories();
  const currentCategory = categories.find((p) => p.id === product.subCategory.categoryId);
  const categoriesDropdown = categories.map(
    (category) => new DropdownModel(category.id, category.value)
  );
  const subCategoriesDropdown = currentCategory?.subCategories
    ? currentCategory?.subCategories.map(
        (subCategory) => new DropdownModel(subCategory.id, subCategory.value)
      )
    : [];
  const conditionsDropdown = (await conditionService.getConditions()).map(
    (condition) => new DropdownModel(condition.id, condition.value)
  );

  return {
    props: {
      product,
      category: currentCategory,
      categoriesString: JSON.stringify(categoriesDropdown),
      subCategoriesString: JSON.stringify(subCategoriesDropdown),
      conditionsString: JSON.stringify(conditionsDropdown),
    },
  };
}
