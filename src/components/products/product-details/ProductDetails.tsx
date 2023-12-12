import ProductModel from '../../../models/products/product';
import ProductDetailModel from '../../../models/product-detail';
import Utils from '../../../utils';

import styles from './ProductDetails.module.css';

type Props = {
  product: ProductModel;
};

export default function ProductDetails({ product }: Props) {
  const productDetails = [
    new ProductDetailModel('Name', product.name),
    new ProductDetailModel('Description', product.description),
    new ProductDetailModel('Size', product.size),
    new ProductDetailModel('Size Type', product.sizeTypeValue),
    new ProductDetailModel('Category', product.subCategory.category.value),
    new ProductDetailModel('SubCategory', product.subCategory.value),
    new ProductDetailModel('Condition', product.condition.value),
    new ProductDetailModel('Brand', product.brand),
    new ProductDetailModel('Purchase Price', product.purchasePrice),
    new ProductDetailModel('Purchase Date', Utils.formatDate(product.purchaseDate ?? '')),
  ];

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
