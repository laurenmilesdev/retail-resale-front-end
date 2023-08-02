/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from 'react';
import { GridColDef } from '@mui/x-data-grid';
import Loading from '../loading/Loading';
import ProductsTable from '../products/ProductsTable';
import ProductModel from '../../models/products/product';
import ProductService from '../../services/product-service';

const productService = new ProductService(process.env.NEXT_PUBLIC_BASE_API_URL as string);

export default function Products() {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 300 },
    { field: 'description', headerName: 'Description', width: 300 },
    { field: 'size', headerName: 'Size', width: 150 },
    { field: 'subCategoryId', headerName: 'SubCategory', width: 150 },
    { field: 'brand', headerName: 'Brand', width: 150 },
  ];

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
      <ProductsTable products={products} columns={columns} />
    </Loading>
  );
}
