import ProductDetailModel from '../../../models/product-detail';

import styles from './ProductDetails.module.css';

type Props = {
  productDetails: ProductDetailModel[];
};

export default function ProductDetails({ productDetails }: Props) {
  return (
    <>
      {productDetails.map((field: ProductDetailModel) => (
        <div className={`${styles.detail} col-md-12`} key={field.name}>
          <div className={`col-md-12`}>
            <h5>{field.name}</h5>
          </div>
          <div className="col-md-12">{field.value}</div>
        </div>
      ))}
    </>
  );
}
