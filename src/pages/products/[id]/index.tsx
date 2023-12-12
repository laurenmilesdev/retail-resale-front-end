/* eslint-disable @typescript-eslint/no-floating-promises */
import { InferGetServerSidePropsType } from 'next';
import { useEffect, useState } from 'react';
import Loading from '../../../components/loading/Loading';
import PageNavigationButtons from '../../../components/page-navigation-buttons/PageNavigationButtons';
import ProductDetails from '../../../components/products/product-details/ProductDetails';
import ProductForm from '../../../components/products/product-form/ProductForm';
import ErrorCard from '../../../components/error-card/ErrorCard';

import ErrorModel from '../../../models/error';
import CategoryModel from '../../../models/products/category';
import DropdownModel from '../../../models/dropdown';
import ProductModel from '../../../models/products/product';

import ProductService from '../../../services/product-service';
import CategoryService from '../../../services/category-service';
import ConditionService from '../../../services/condition-service';
import Utils from '../../../utils';

const baseApiUrl: string = process.env.NEXT_PUBLIC_BASE_API_URL ?? '';
const productService = new ProductService(baseApiUrl);
const categoryService = new CategoryService(baseApiUrl);
const conditionService = new ConditionService(baseApiUrl);

export const errorTitle = 'Error retrieving product';
export const noProductFoundError = 'No product found with that ID. Please try another product.';
export const productError =
  'An error occured while fetching product. If problem persists please contact technical support.';

export default function Index({ id }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [error, setError] = useState<ErrorModel | undefined>();
  const [product, setProduct] = useState<ProductModel | undefined>();
  const [newProduct, setNewProduct] = useState<ProductModel | undefined>();
  const [edit, setEdit] = useState<boolean>(false);

  const [categories, setCategories] = useState<CategoryModel[] | undefined>();
  const [categoriesDropdown, setCategoriesDropdown] = useState<DropdownModel[] | undefined>();
  const [subCategoriesDropdown, setSubCategoriesDropdown] = useState<DropdownModel[]>();
  const [conditionsDropdown, setConditionsDropdown] = useState<DropdownModel[]>();

  async function getProduct(productId: number) {
    try {
      const productResponse = await productService.getProductById(productId);
      const categoriesResponse = await categoryService.getCategories();

      if (productResponse) {
        setProduct(productResponse);
        setNewProduct(productResponse);

        if (categoriesResponse) {
          const currentCategory = categoriesResponse.find(
            (p) => p.id === productResponse.subCategory.categoryId
          );
          const categoryDropdownModels = categoriesResponse.map(
            (category) => new DropdownModel(category.id, category.value)
          );
          const subCategoryDropdownModels = currentCategory?.subCategories
            ? currentCategory?.subCategories.map(
                (subCategory) => new DropdownModel(subCategory.id, subCategory.value)
              )
            : [];

          setCategories(categoriesResponse);
          setCategoriesDropdown(categoryDropdownModels);
          setSubCategoriesDropdown(subCategoryDropdownModels);
        }
      }

      setLoaded(true);
    } catch (err: any) {
      const { status } = err.response;
      const errorModel =
        status === 404
          ? new ErrorModel(errorTitle, noProductFoundError)
          : Utils.getApiErrorModel(errorTitle, productError, err);

      setError(errorModel);
      setLoaded(true);
    } finally {
      setLoaded(true);
    }
  }

  async function getConditions() {
    const conditionsResponse = await conditionService.getConditions();

    if (conditionsResponse) {
      const conditionDropdownModels = conditionsResponse.map(
        (condition) => new DropdownModel(condition.id, condition.value)
      );

      setConditionsDropdown(conditionDropdownModels);
    }
  }

  function getSubCategories(categoryId: number) {
    const currentCategory = categories?.find((p) => p.id === categoryId);
    const subCategoryDropdownModels = currentCategory?.subCategories
      ? currentCategory?.subCategories.map(
          (subCategory) => new DropdownModel(subCategory.id, subCategory.value)
        )
      : [];

    setSubCategoriesDropdown(subCategoryDropdownModels);
  }

  useEffect(() => {
    getProduct(id as unknown as number);
    getConditions();
  }, []);

  useEffect(() => {
    const categoryId = product?.subCategory.categoryId;

    if (categoryId) getSubCategories(categoryId as unknown as number);
  }, [newProduct?.subCategory.categoryId]);

  return (
    <>
      {!error && product && (
        <PageNavigationButtons
          edit={edit}
          setEdit={setEdit}
          product={product}
          setProduct={setNewProduct}
        />
      )}

      <Loading loaded={loaded}>
        {!error ? (
          <>
            {product && !edit ? (
              <ProductDetails product={product} />
            ) : (
              <ProductForm
                product={newProduct}
                setProduct={setNewProduct}
                categories={categoriesDropdown}
                subCategories={subCategoriesDropdown}
                conditions={conditionsDropdown}
              />
            )}
          </>
        ) : (
          <ErrorCard error={error} />
        )}
      </Loading>
    </>
  );
}

export function getServerSideProps(context: any) {
  return {
    props: { id: context.params.id },
  };
}
