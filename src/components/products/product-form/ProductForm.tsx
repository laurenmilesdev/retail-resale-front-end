import { Button } from '@mui/material';

import styles from './ProductForm.module.css';

type Props = {
  productFields: any[];
};

export default function ProductForm({ productFields }: Props) {
  return (
    <form>
      {productFields.map((productField) => (
        <div className={`${styles.detail} col-md-12`} key={productField.name}>
          <div className={`col-md-12`}>
            <h5>{productField.name}</h5>
          </div>
          <div className="col-md-12">{productField.editField}</div>
        </div>
      ))}

      <Button type="submit" className="btn-primary">
        Save
      </Button>
    </form>
  );
}
