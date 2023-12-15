/* eslint-disable @typescript-eslint/no-floating-promises */
import { InferGetServerSidePropsType } from 'next';
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@mui/material';
import Loading from '../../../components/loading/Loading';
import PageNavigationButtons from '../../../components/page-navigation-buttons/PageNavigationButtons';
import ProductDetailsForm from '../../../components/products/product-details-form/ProductDetailsForm';
import ErrorCard from '../../../components/error-card/ErrorCard';

import ErrorModel from '../../../models/error';
import CategoryModel from '../../../models/products/category';
import DropdownModel from '../../../models/dropdown';
import ProductModel from '../../../models/products/product';

import ProductService from '../../../services/product-service';
import CategoryService from '../../../services/category-service';
import ConditionService from '../../../services/condition-service';

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
  const [edit, setEdit] = useState<boolean>(false);

  const [categories, setCategories] = useState<CategoryModel[] | undefined>();
  const [categoriesDropdown, setCategoriesDropdown] = useState<DropdownModel[] | undefined>();
  const [subCategoriesDropdown, setSubCategoriesDropdown] = useState<DropdownModel[]>();
  const [conditionsDropdown, setConditionsDropdown] = useState<DropdownModel[]>();

  async function getSetProduct(productId: number) {
    const productResponse = await productService.getProductById(productId);
    const categoriesResponse = await categoryService.getCategories();

    if (!productResponse.error) {
      setProduct(productResponse.data);

      if (!categoriesResponse.error) {
        const { data } = categoriesResponse;
        const currentCategory = data.find(
          (p) => p.id === productResponse.data.subCategory.categoryId
        );
        const categoryDropdownModels = data.map(
          (category) => new DropdownModel(category.id, category.value)
        );
        const subCategoryDropdownModels = currentCategory?.subCategories
          ? currentCategory?.subCategories.map(
              (subCategory) => new DropdownModel(subCategory.id, subCategory.value)
            )
          : [];

        setCategories(categoriesResponse.data);
        setCategoriesDropdown(categoryDropdownModels);
        setSubCategoriesDropdown(subCategoryDropdownModels);
      }
    } else setError(productResponse.error);

    setLoaded(true);
  }

  async function getSetConditions() {
    const conditionsResponse = await conditionService.getConditions();

    if (!conditionsResponse.error) {
      const conditionDropdownModels = conditionsResponse.data.map(
        (condition) => new DropdownModel(condition.id, condition.value)
      );

      setConditionsDropdown(conditionDropdownModels);
    }
  }

  useEffect(() => {
    getSetProduct(id as unknown as number);
    getSetConditions();
  }, []);

  useEffect(() => {
    const categoryId = product?.categoryId;

    if (categoryId) {
      const filteredSubCategories = getSubCategoriesByCategory(
        categoryId as unknown as number,
        categories ?? []
      );

      setSubCategoriesDropdown(filteredSubCategories);
    }
  }, [product?.categoryId]);

  return (
    <>
      {!error && product && <PageNavigationButtons edit={edit} setEdit={setEdit} />}

      <Loading loaded={loaded}>
        {!error ? (
          <>
            {product && (
              <Card>
                <CardContent>
                  <ProductDetailsForm
                    edit={edit}
                    product={product}
                    setProduct={setProduct}
                    categories={categoriesDropdown ?? []}
                    subCategories={subCategoriesDropdown ?? []}
                    conditions={conditionsDropdown ?? []}
                  />
                </CardContent>
              </Card>
            )}
          </>
        ) : (
          <ErrorCard
            title={errorTitle}
            description={error.status === 404 ? noProductFoundError : productError}
            error={error}
          />
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

export function getSubCategoriesByCategory(categoryId: number, categories: CategoryModel[]) {
  const currentCategory = categories.find((p) => p.id === categoryId);

  return currentCategory?.subCategories
    ? currentCategory?.subCategories.map(
        (subCategory) => new DropdownModel(subCategory.id, subCategory.value)
      )
    : [];
}
