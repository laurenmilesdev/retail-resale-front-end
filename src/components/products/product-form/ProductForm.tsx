import { Dispatch, SetStateAction } from 'react';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers';
import { Button, MenuItem, Select, TextField } from '@mui/material';
import ProductModel from '../../../models/products/product';
import DropdownModel from '../../../models/dropdown';
import Constants from '../../../constants';

import styles from './ProductForm.module.css';

type Props = {
  sizeTypeId?: number;
  setSizeTypeId: Dispatch<SetStateAction<number | undefined>>;
  categoryId?: number;
  setCategoryId: Dispatch<SetStateAction<number | undefined>>;
  categories: DropdownModel[];
  subCategoryId?: number;
  setSubCategoryId: Dispatch<SetStateAction<number | undefined>>;
  subCategories: DropdownModel[];
  conditionId?: number;
  setConditionId: Dispatch<SetStateAction<number | undefined>>;
  conditions: DropdownModel[];
  purchaseDate?: dayjs.Dayjs;
  setPurchaseDate: Dispatch<SetStateAction<dayjs.Dayjs | null | undefined>>;
  product?: ProductModel;
};

export default function ProductForm({
  sizeTypeId,
  setSizeTypeId,
  categoryId,
  setCategoryId,
  categories,
  subCategoryId,
  setSubCategoryId,
  subCategories,
  conditionId,
  setConditionId,
  conditions,
  purchaseDate,
  setPurchaseDate,
  product,
}: Props) {
  return (
    <form>
      <div className={`${styles.detail} col-md-12`}>
        <div className={`col-md-12`}>
          <h5>Name</h5>
        </div>
        <div className="col-md-12">
          <TextField
            name="Name"
            defaultValue={product?.name}
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
            name="Description"
            defaultValue={product?.description}
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
            name="Size"
            defaultValue={product?.size}
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
            value={sizeTypeId}
            name="Size Type"
            id={`size-type-select`}
            labelId={`size-type-select-label`}
            variant="standard"
            onChange={(newValue) => setSizeTypeId(newValue.target.value as unknown as number)}
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
            value={categoryId}
            name="Category"
            id={`category-select`}
            labelId={`category-select-label`}
            variant="standard"
            onChange={(newValue) => setCategoryId(newValue.target.value as unknown as number)}
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
            value={subCategoryId}
            name="SubCategory"
            id={`subCategory-select`}
            labelId={`subCategory-select-label`}
            variant="standard"
            onChange={(newValue) => setSubCategoryId(newValue.target.value as unknown as number)}
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
            value={conditionId}
            name="Condition"
            id={`condition-select`}
            labelId={`condition-select-label`}
            variant="standard"
            onChange={(newValue) => setConditionId(newValue.target.value as unknown as number)}
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
            name="Brand"
            defaultValue={product?.brand}
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
            name="Purchase Price"
            defaultValue={product?.purchasePrice}
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
          <DatePicker
            value={purchaseDate}
            onChange={(newValue) => setPurchaseDate(newValue)}
            className={styles['date-picker']}
          />
        </div>
      </div>

      <Button type="submit" className="btn-primary">
        Save
      </Button>
    </form>
  );
}
