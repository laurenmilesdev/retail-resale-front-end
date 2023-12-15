import { Dispatch, SetStateAction } from 'react';
import { Button } from '@mui/material';
import ProductModel from '../../models/products/product';
import ProductCreateUpdateModel from '../../models/products/product-create-update';

type Props = {
  edit: boolean;
  setEdit: Dispatch<SetStateAction<boolean>>;
  product: ProductModel;
  setUpdateProduct: Dispatch<SetStateAction<ProductCreateUpdateModel | undefined>>;
};

export default function PageNavigationButtons({ edit, setEdit, product, setUpdateProduct }: Props) {
  function resetForm() {
    const updateModel = ProductCreateUpdateModel.mapFromProduct(product);

    setUpdateProduct(updateModel);
  }

  return (
    <>
      <Button href="/products" className="btn-primary" type="button">
        Back
      </Button>
      {edit ? (
        <Button
          onClick={() => {
            setEdit(!edit);
            resetForm();
          }}
          className="btn-primary"
          type="button"
        >
          Cancel
        </Button>
      ) : (
        <Button type="button" onClick={() => setEdit(!edit)} className="btn-primary">
          Edit
        </Button>
      )}
    </>
  );
}
