import ProductDetailModel from '../../../models/product-detail';

import styles from './ProductDetails.module.css';

type Props = {
  productDetails: ProductDetailModel[];
};

export default function ProductDetails({ productDetails }: Props) {
  return (
    <>
      {productDetails.map(({ name, value }: ProductDetailModel, index: number) => (
        <div className={`${styles.detail} col-md-12`} key={name}>
          <div className={`col-md-12`} id={`product-detail-name-${index}`}>
            <h5>{name}</h5>
          </div>
          <div className="col-md-12" id={`product-detail-value-${index}`}>
            {value}
          </div>
        </div>
      ))}
    </>
  );
}
