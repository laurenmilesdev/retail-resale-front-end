import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import ProductService from '../../services/product-service';
import Loading from '../../components/loading/Loading';
import ProductModel from '../../models/products/product';
import ProductDetails from '../../components/products/product-details/ProductDetails';

const productService = new ProductService(process.env.NEXT_PUBLIC_BASE_API_URL as string);

export default function Product() {
  const { id } = useRouter().query;
  const [product, setProduct] = useState<ProductModel>();
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await productService.getProductById(id as string);

        setProduct(response);
      } catch (error) {
        // TODO: Handle error by returning error object and notification to user
        setLoaded(true);
      } finally {
        setLoaded(true);
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getProduct();
  }, []);

  return (
    <>
      <Button className="btn-primary">Edit</Button>
      <Button href="/products" className="btn-primary">
        Back
      </Button>

      <Loading loaded={loaded}>
        <ProductDetails product={product} />
      </Loading>
    </>
  );
}
