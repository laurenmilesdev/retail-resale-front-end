import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ProductModel from '../../models/products/product';

type Props = {
  products: ProductModel[];
  columns: GridColDef[];
};

export default function ProductsTable({ products, columns }: Props) {
  return (
    <DataGrid
      rows={products ?? []}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      checkboxSelection
      disableRowSelectionOnClick
    />
  );
}
