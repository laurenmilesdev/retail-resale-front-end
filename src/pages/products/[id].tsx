/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Card, CardContent } from '@mui/material';
import Loading from '../../components/loading/Loading';
import ProductDetails from '../../components/products/product-details/ProductDetails';
import ProductModel from '../../models/products/product';
import ConditionModel from '../../models/products/condition';
import ProductService from '../../services/product-service';
import ConditionService from '../../services/condition-service';

const productService = new ProductService(process.env.NEXT_PUBLIC_BASE_API_URL as string);
const conditionService = new ConditionService(process.env.NEXT_PUBLIC_BASE_API_URL as string);

export default function Product() {
  const { id } = useRouter().query;
  const [product, setProduct] = useState<ProductModel>();
  const [conditions, setConditions] = useState<ConditionModel[]>();
  const [loaded, setLoaded] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);

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
    const getConditions = async () => {
      try {
        const response = await conditionService.getConditions();

        setConditions(response);
      } catch (error) {
        // Handle error
      }
    };

    getProduct();
    getConditions();
  }, []);

  useEffect(() => {}, [edit]);

  return (
    <>
      <Button href="/products" className="btn-primary">
        Back
      </Button>
      <Button onClick={() => setEdit(!edit)} className="btn-primary">
        {edit ? 'Save' : 'Edit'}
      </Button>
      {edit && (
        <Button onClick={() => setEdit(!edit)} className="btn-primary">
          Cancel
        </Button>
      )}

      <Loading loaded={loaded}>
        <Card>
          <CardContent>
            {product ? (
              <ProductDetails product={product} conditions={conditions ?? []} edit={edit} />
            ) : (
              <>Product not found.</>
            )}
          </CardContent>
        </Card>
      </Loading>
    </>
  );
}
