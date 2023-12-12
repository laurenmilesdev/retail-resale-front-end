/* eslint-disable @typescript-eslint/no-floating-promises */
import { InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button, Card, CardContent } from '@mui/material';
import Loading from '../../../components/loading/Loading';
import PageNavigationButtons from '../../../components/page-navigation-buttons/PageNavigationButtons';
import ProductDetails from '../../../components/products/product-details/ProductDetails';
import ErrorCard from '../../../components/error-card/ErrorCard';
import ProductModel from '../../../models/products/product';
import ErrorModel from '../../../models/error';
import ProductService from '../../../services/product-service';
import Utils from '../../../utils';

const baseApiUrl: string = process.env.NEXT_PUBLIC_BASE_API_URL ?? '';
const productService = new ProductService(baseApiUrl);

export const errorTitle = 'Error retrieving product';
export const noProductFoundError = 'No product found with that ID. Please try another product.';
export const productError =
  'An error occured while fetching product. If problem persists please contact technical support.';

export default function Product({ id }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [loaded, setLoaded] = useState<boolean>(false);
  //   const [edit, setEdit] = useState<boolean>(false);
  const [error, setError] = useState<ErrorModel | undefined>();
  const [product, setProduct] = useState<ProductModel | undefined>();
  //   const { id } = useRouter().query;

  async function getProduct(productId: number) {
    try {
      const productResponse = await productService.getProductById(productId);

      if (productResponse) setProduct(productResponse);
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

  useEffect(() => {
    if (id) getProduct(id as unknown as number);
    else {
      setError(new ErrorModel(errorTitle, 'ID is undefined.'));
      setLoaded(true);
    }
  }, []);

  // useEffect(() => {}, [edit]);

  return (
    <>
      {/* {!error && product && (
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
      )} */}

      {!error && product && (
        <Button type="button" href={`${id as string}/edit`} className="btn-primary">
          Edit
        </Button>
      )}

      <Loading loaded={loaded}>
        {!error ? (
          <>{product && <ProductDetails product={product} />}</>
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
