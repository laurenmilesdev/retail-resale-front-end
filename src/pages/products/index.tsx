/* eslint-disable @typescript-eslint/no-floating-promises */
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import Loading from '../../components/loading/Loading';
import ProductsTable from '../../components/products/products-table/ProductsTable';
import ErrorCard from '../../components/error-card/ErrorCard';
import ProductModel from '../../models/products/product';
import ErrorModel from '../../models/error';
import ProductService from '../../services/product-service';
import Utils from '../../utils';

const productService = new ProductService(process.env.NEXT_PUBLIC_BASE_API_URL as string);

export default function Index() {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [error, setError] = useState<ErrorModel | undefined>();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productResponse = await productService.getProducts();

        if (productResponse.length > 0) setProducts(productResponse);
        else {
          const noProductsError = new ErrorModel(
            'No products',
            'Please add products first and then return to page to view them.'
          );

          setError(noProductsError);
        }
      } catch (err: any) {
        const errorModel = Utils.getApiErrorModel(
          'Error retrieving products',
          'An error occured while fetching products. If problem persists please contact technical support.',
          err
        );

        setError(errorModel);
        setLoaded(true);
      } finally {
        setLoaded(true);
      }
    };

    getProducts();
  }, []);

  return (
    <>
      <Button href="/products/create" className="btn-primary">
        Add Product
      </Button>

      <Loading loaded={loaded}>
        {!error ? <ProductsTable products={products} /> : <ErrorCard error={error} />}
      </Loading>
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      title: 'Products',
    },
  };
}
