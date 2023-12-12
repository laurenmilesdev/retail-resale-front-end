/* eslint-disable no-param-reassign */
import { Dispatch, SetStateAction } from 'react';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers';
import {
  Button,
  Card,
  CardContent,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import ProductModel from '../../../models/products/product';
import DropdownModel from '../../../models/dropdown';
import Constants from '../../../constants';

import styles from './ProductForm.module.css';

type Props = {
  product: ProductModel;
  setProduct: Dispatch<SetStateAction<ProductModel | undefined>>;
  categories: DropdownModel[];
  subCategories: DropdownModel[];
  conditions: DropdownModel[];
};

export default function ProductForm({
  product,
  setProduct,
  categories,
  subCategories,
  conditions,
}: Props) {
  function onChange(event: SelectChangeEvent) {
    const { name } = event.target;
    const value = event.target.value as unknown as number;

    if (name) {
      if (event.target.name === 'sizeType') product.sizeType = value;
      if (event.target.name === 'categoryId') product.subCategory.categoryId = value;
      if (event.target.name === 'subCategoryId') product.subCategoryId = value;
      if (event.target.name === 'conditionId') product.conditionId = value;

      setProduct({ ...product });
    }
  }

  return (
    <form>
      <Card>
        <CardContent>
          <div className={`${styles.detail} col-md-12`}>
            <div className={`col-md-12`}>
              <h5>Name</h5>
            </div>
            <div className="col-md-12">
              <TextField
                name="name"
                defaultValue={product.name}
                className={styles['text-field']}
                variant="standard"
              />
            </div>
          </div>

          <div className={`${styles.detail} col-md-12`}>
            <div className={`col-md-12`}>
              <h5>Description</h5>
            </div>
            <div className="col-md-12">
              <TextField
                name="description"
                defaultValue={product.description}
                className={styles['text-field']}
                variant="standard"
                multiline={true}
              />
            </div>
          </div>

          <div className={`${styles.detail} col-md-12`}>
            <div className={`col-md-12`}>
              <h5>Size</h5>
            </div>
            <div className="col-md-12">
              <TextField
                name="size"
                defaultValue={product.size}
                className={styles['text-field']}
                variant="standard"
              />
            </div>
          </div>

          <div className={`${styles.detail} col-md-12`}>
            <div className={`col-md-12`}>
              <h5>Size Type</h5>
            </div>
            <div className="col-md-12">
              <Select
                value={product.sizeType as unknown as string}
                name="sizeType"
                id={`size-type-select`}
                labelId={`size-type-select-label`}
                variant="standard"
                onChange={onChange}
                className={styles['select-field']}
              >
                {Constants.SIZE_TYPES.map((sizeType: DropdownModel) => (
                  <MenuItem value={sizeType.id} key={sizeType.value}>
                    {sizeType.value}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </div>

          <div className={`${styles.detail} col-md-12`}>
            <div className={`col-md-12`}>
              <h5>Category</h5>
            </div>
            <div className="col-md-12">
              <Select
                value={product.subCategory.categoryId as unknown as string}
                name="categoryId"
                id={`category-select`}
                labelId={`category-select-label`}
                variant="standard"
                onChange={onChange}
                className={styles['select-field']}
              >
                {categories.map((category: DropdownModel) => (
                  <MenuItem value={category.id} key={category.value}>
                    {category.value}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </div>

          <div className={`${styles.detail} col-md-12`}>
            <div className={`col-md-12`}>
              <h5>SubCategory</h5>
            </div>
            <div className="col-md-12">
              <Select
                value={product.subCategoryId as unknown as string}
                name="subCategoryId"
                id={`subCategory-select`}
                labelId={`subCategory-select-label`}
                variant="standard"
                onChange={onChange}
                className={styles['select-field']}
              >
                {subCategories.map((subCategory: DropdownModel) => (
                  <MenuItem value={subCategory.id} key={subCategory.value}>
                    {subCategory.value}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </div>

          <div className={`${styles.detail} col-md-12`}>
            <div className={`col-md-12`}>
              <h5>Condition</h5>
            </div>
            <div className="col-md-12">
              <Select
                value={product.conditionId as unknown as string}
                name="conditionId"
                id={`condition-select`}
                labelId={`condition-select-label`}
                variant="standard"
                onChange={onChange}
                className={styles['select-field']}
              >
                {conditions.map((condition: DropdownModel) => (
                  <MenuItem value={condition.id} key={condition.value}>
                    {condition.value}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </div>

          <div className={`${styles.detail} col-md-12`}>
            <div className={`col-md-12`}>
              <h5>Brand</h5>
            </div>
            <div className="col-md-12">
              <TextField
                name="brand"
                defaultValue={product.brand}
                className={styles['text-field']}
                variant="standard"
              />
            </div>
          </div>

          <div className={`${styles.detail} col-md-12`}>
            <div className={`col-md-12`}>
              <h5>Purchase Price</h5>
            </div>
            <div className="col-md-12">
              <TextField
                name="purchasePrice"
                defaultValue={product.purchasePrice}
                className={styles['text-field']}
                variant="standard"
              />
            </div>
          </div>

          <div className={`${styles.detail} col-md-12`}>
            <div className={`col-md-12`}>
              <h5>Purchase Date</h5>
            </div>
            <div className="col-md-12">
              <DatePicker value={dayjs(product.purchaseDate)} className={styles['date-picker']} />
            </div>
          </div>

          <Button type="submit" className="btn-primary">
            Save
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}
