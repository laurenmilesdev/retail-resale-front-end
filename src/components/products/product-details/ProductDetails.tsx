import ProductModel from '../../../models/products/product';

import styles from './ProductDetails.module.css';

type Props = {
  product: ProductModel;
};

export default function ProductDetails({ product }: Props) {
  const newDate = product.purchaseDate ? convertDate(product.purchaseDate) : null;
  const productFields = [
    { name: 'Name', value: product.name },
    { name: 'Description', value: product.description },
    { name: 'Size', value: product.size },
    { name: 'Size Type', value: product.sizeTypeValue },
    { name: 'Category', value: product.subCategory.category.value },
    { name: 'SubCategory', value: product.subCategory.value },
    { name: 'Condition', value: product.condition.value },
    { name: 'Brand', value: product.brand },
    { name: 'Purchase Price', value: product.purchasePrice },
    { name: 'Purchase Date', value: newDate },
  ];

  return (
    <>
      {productFields.map((field) => (
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

export function convertDate(date: string) {
  const tIndex = date.indexOf('T');

  return date.substring(0, tIndex);
}
