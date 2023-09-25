import { Card, CardContent } from '@mui/material';
import ProductModel from '../../../models/products/product';

import styles from './ProductDetails.module.css';

type Props = {
  product?: ProductModel;
};

export default function ProductDetails({ product }: Props) {
  return (
    <Card>
      <CardContent>
        {product ? (
          <>
            <div className={`${styles.detail} col-md-12`}>
              <div className={`col-md-12`}>
                <h5>Name</h5>
              </div>
              <div className="col-md-12">{product.name}</div>
            </div>

            <div className={`${styles.detail} col-md-12`}>
              <div className={`col-md-12`}>
                <h5>Description</h5>
              </div>
              <div className="col-md-12">{product.description}</div>
            </div>

            <div className={`${styles.detail} col-md-12`}>
              <div className={`col-md-12`}>
                <h5>Size</h5>
              </div>
              <div className="col-md-12">{product.size}</div>
            </div>

            <div className={`${styles.detail} col-md-12`}>
              <div className={`col-md-12`}>
                <h5>Size Type</h5>
              </div>
              <div className="col-md-12">{product.sizeTypeValue}</div>
            </div>

            <div className={`${styles.detail} col-md-12`}>
              <div className={`col-md-12`}>
                <h5>Condition</h5>
              </div>
              <div className="col-md-12">{product.condition}</div>
            </div>

            <div className={`${styles.detail} col-md-12`}>
              <div className={`col-md-12`}>
                <h5>Category</h5>
              </div>
              <div className="col-md-12">{product.subCategory.category.value}</div>
            </div>

            <div className={`${styles.detail} col-md-12`}>
              <div className={`col-md-12`}>
                <h5>Sub Category</h5>
              </div>
              <div className="col-md-12">{product.subCategory.value}</div>
            </div>

            {product.brand && (
              <div className={`${styles.detail} col-md-12`}>
                <div className={`col-md-12`}>
                  <h5>Brand</h5>
                </div>
                <div className="col-md-12">{product.brand}</div>
              </div>
            )}

            {product.purchasePrice && (
              <div className={`${styles.detail} col-md-12`}>
                <div className={`col-md-12`}>
                  <h5>Purchase Price</h5>
                </div>
                <div className="col-md-12">{product.purchasePrice}</div>
              </div>
            )}

            {product.purchaseDate && (
              <div className={`${styles.detail} col-md-12`}>
                <div className={`col-md-12`}>
                  <h5>Purchase Date</h5>
                </div>
                <div className="col-md-12">{product.purchaseDate.toLocaleDateString()}</div>
              </div>
            )}
          </>
        ) : (
          <>Product not found.</>
        )}
      </CardContent>
    </Card>
  );
}
