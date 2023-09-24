/* eslint-disable @typescript-eslint/no-floating-promises */
import { useState, useEffect } from 'react';
import ProductModel from '../../models/products/product';
import Loading from '../../components/loading/Loading';
import ProductsTable from '../../components/products/ProductsTable';
import ProductService from '../../services/product-service';

const productService = new ProductService(process.env.NEXT_PUBLIC_BASE_API_URL as string);

export default function Products() {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await productService.getProducts();

        setProducts(response);
      } catch (error) {
        // TODO: Handle error by returning error object and notification to user
        setLoaded(true);
      } finally {
        setLoaded(true);
      }
    };

    getProducts();
  }, []);

  return (
    <Loading loaded={loaded}>
      <ProductsTable products={products} />
    </Loading>
  );
}

export function getStaticProps() {
  return {
    props: {
      title: 'Products',
    },
  };
}
