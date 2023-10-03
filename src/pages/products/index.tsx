/* eslint-disable @typescript-eslint/no-floating-promises */
import { InferGetServerSidePropsType } from 'next';
import { useState, useEffect } from 'react';
import { Button, Card, CardContent } from '@mui/material';
import ProductModel from '../../models/products/product';
import Loading from '../../components/loading/Loading';
import ProductsTable from '../../components/products/products-table/ProductsTable';
import ProductService from '../../services/product-service';

const productService = new ProductService(process.env.NEXT_PUBLIC_BASE_API_URL as string);

export const addButtonHref = '/products/create';

export default function Index({
  productsString,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [products, setProducts] = useState<ProductModel[]>(
    JSON.parse(productsString) as ProductModel[]
  );
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    setLoaded(true);
  }, [products]);

  return (
    <>
      <Button href={addButtonHref} className="btn-primary">
        Add Product
      </Button>

      <Card>
        <CardContent>
          <Loading loaded={loaded}>
            <ProductsTable products={products} />
          </Loading>
        </CardContent>
      </Card>
    </>
  );
}

export async function getServerSideProps() {
  const products = await productService.getProducts();

  return {
    props: {
      title: 'Products',
      productsString: JSON.stringify(products),
    },
  };
}
