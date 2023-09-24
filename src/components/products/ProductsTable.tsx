import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ProductModel from '../../models/products/product';

import styles from './ProductsTable.module.css';

type Props = {
  products: ProductModel[];
};

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', headerClassName: 'table-header', flex: 1 },
  { field: 'description', headerName: 'Description', headerClassName: 'table-header', flex: 1 },
  { field: 'size', headerName: 'Size', headerClassName: 'table-header', width: 100 },
  {
    field: 'subCategoryId',
    headerName: 'SubCategory',
    headerClassName: 'table-header',
    width: 200,
  },
  { field: 'brand', headerName: 'Brand ', headerClassName: 'table-header', width: 200 },
];

export default function ProductsTable({ products }: Props) {
  return (
    <DataGrid
      rows={products ?? []}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      pageSizeOptions={[10]}
      disableRowSelectionOnClick
      className={styles.table}
    />
  );
}
