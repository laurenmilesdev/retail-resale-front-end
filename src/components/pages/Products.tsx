import { useEffect, useState } from 'react';
import { GridColDef } from '@mui/x-data-grid';
import ProductsTable from '../products/ProductsTable';
import ProductModel from '../../models/products/product';

import MockData from '../../../mock-data.json';

export default function Products() {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 300 },
    { field: 'description', headerName: 'Description', width: 300 },
    { field: 'size', headerName: 'Size', width: 150 },
    { field: 'subCategoryId', headerName: 'SubCategory', width: 150 },
    { field: 'brand', headerName: 'Brand', width: 150 },
  ];

  useEffect(() => {
    setProducts(MockData.products as unknown as ProductModel[]);
  });

  return <ProductsTable products={products} columns={columns} />;
}
