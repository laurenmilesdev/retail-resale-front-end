/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Card, CardContent } from '@mui/material';
import Loading from '../../components/loading/Loading';
import FormActionButtons from '../../components/products/form-action-buttons/FormActionButtons';
import ProductDetails from '../../components/products/product-details/ProductDetails';
import ProductForm from '../../components/products/product-form/ProductForm';
import ProductModel from '../../models/products/product';
import DropdownModel from '../../models/dropdown';
import ProductService from '../../services/product-service';
import ConditionService from '../../services/condition-service';
import CategoryService from '../../services/category-service';

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

  async function getProduct() {
    try {
      const response = await productService.getProductById(id as unknown as number);

      setProduct(response);
      setSizeTypeId(response.sizeType);
      setCategoryId(response.subCategory.categoryId);
      setSubCategoryId(response.subCategory.id);
      setConditionId(response.conditionId);
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

  const productDetails = product ? <ProductDetails product={product} /> : <>Product not found.</>;
  const productForm =
    product && sizeTypeId && categoryId && subCategoryId && conditionId ? (
      <ProductForm
        product={product}
        sizeTypeId={sizeTypeId}
        setSizeTypeId={setSizeTypeId}
        categoryId={categoryId}
        setCategoryId={setCategoryId}
        categories={categories ?? []}
        subCategoryId={subCategoryId}
        setSubCategoryId={setSubCategoryId}
        subCategories={subCategories ?? []}
        conditionId={conditionId}
        setConditionId={setConditionId}
        conditions={conditions ?? []}
      />
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
