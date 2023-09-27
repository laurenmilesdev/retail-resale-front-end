/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Card, CardContent, SelectChangeEvent } from '@mui/material';
import Loading from '../../components/loading/Loading';
import FormActionButtons from '../../components/products/form-action-buttons/FormActionButtons';
import ProductDetails from '../../components/products/product-details/ProductDetails';
import ProductModel from '../../models/products/product';
import ConditionModel from '../../models/products/condition';
import SubCategoryModel from '../../models/products/sub-category';
import CategoryModel from '../../models/products/category';
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
  const [product, setProduct] = useState<ProductModel>();
  const [sizeTypeId, setSizeTypeId] = useState<number | undefined>();
  const [categoryId, setCategoryId] = useState<number | undefined>();
  const [categories, setCategories] = useState<CategoryModel[]>();
  const [subCategoryId, setSubCategoryId] = useState<number | undefined>();
  const [subCategories, setSubCategories] = useState<SubCategoryModel[]>();
  const [conditionId, setConditionId] = useState<number | undefined>();
  const [conditions, setConditions] = useState<ConditionModel[]>();

  function handleCategoryChange(event: SelectChangeEvent) {
    setCategoryId(event.target.value as unknown as number);
  }

  async function getProduct() {
    try {
      const response = await productService.getProductById(id as string);

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

      setCategories(response);
      setSubCategories(currentCategory?.subCategories);
    } catch (error) {
      // Handle error
    }
  }

  async function getConditions() {
    try {
      const response = await conditionService.getConditions();

      setConditions(response);
    } catch (error) {
      // Handle error
    }
  }

  async function getCategory() {
    try {
      if (categoryId) {
        const response = await categoryService.getCategoryById(categoryId);

        setCategoryId(categoryId);
        setSubCategories(response.subCategories);
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

      <Loading loaded={loaded}>
        <Card>
          <CardContent>
            {product && sizeTypeId && categoryId && subCategoryId && conditionId ? (
              <ProductDetails
                product={product}
                sizeTypeId={sizeTypeId}
                setSizeTypeId={setSizeTypeId}
                categoryId={categoryId}
                handleCategoryChange={handleCategoryChange}
                categories={categories ?? []}
                subCategoryId={subCategoryId}
                setSubCategoryId={setSubCategoryId}
                subCategories={subCategories ?? []}
                conditionId={conditionId}
                setConditionId={setConditionId}
                conditions={conditions ?? []}
                edit={edit}
              />
            ) : (
              <>Product not found.</>
            )}
          </CardContent>
        </Card>
      </Loading>
    </>
  );
}

export function getServerSideProps() {
  return {
    props: {},
  };
}
