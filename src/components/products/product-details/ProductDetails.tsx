import styles from './ProductDetails.module.css';
import ProductFieldModel from '../../../models/product-field';

type Props = {
  productFields: ProductFieldModel[];
};

export default function ProductDetails({ productFields }: Props) {
  return (
    <>
      {productFields.map((field: ProductFieldModel) => (
        <div className={`${styles.detail} col-md-12`} key={field.name}>
          <div className={`col-md-12`}>
            <h5>{field.name}</h5>
          </div>
          <div className="col-md-12">{field.currentValue}</div>
        </div>
      ))}
    </>
  );
}
