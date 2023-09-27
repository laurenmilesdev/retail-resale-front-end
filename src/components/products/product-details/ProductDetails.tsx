/* eslint-disable no-param-reassign */
import { Dispatch, SetStateAction, useState } from 'react';
import { MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import ProductModel from '../../../models/products/product';
import ConditionModel from '../../../models/products/condition';
import SubCategoryModel from '../../../models/products/sub-category';
import CategoryModel from '../../../models/products/category';
import { sizeTypes } from '../../../constants/size-type';

import styles from './ProductDetails.module.css';

type Props = {
  product: ProductModel;
  sizeTypeId: number;
  setSizeTypeId: Dispatch<SetStateAction<number | undefined>>;
  categoryId: number;
  handleCategoryChange: (event: SelectChangeEvent) => void;
  categories: CategoryModel[];
  subCategoryId: number;
  setSubCategoryId: Dispatch<SetStateAction<number | undefined>>;
  subCategories: SubCategoryModel[];
  conditionId: number;
  setConditionId: Dispatch<SetStateAction<number | undefined>>;
  conditions: ConditionModel[];
  edit?: boolean;
};

export default function ProductDetails({
  product,
  sizeTypeId,
  setSizeTypeId,
  categoryId,
  handleCategoryChange,
  categories,
  subCategoryId,
  setSubCategoryId,
  subCategories,
  conditionId,
  setConditionId,
  conditions,
  edit = false,
}: Props) {
  const newDate = product.purchaseDate ? convertDate(product.purchaseDate) : null;
  const [purchaseDate, setPurchaseDate] = useState<Dayjs | null>(newDate ? dayjs(newDate) : null);
  const textField = (label: string, value: string, multiline = false) => (
    <TextField
      id={label}
      defaultValue={value}
      className={styles['text-field']}
      multiline={multiline}
      variant="standard"
    />
  );

  function handleSizeTypeChange(event: SelectChangeEvent) {
    setSizeTypeId(event.target.value as unknown as number);
  }

  function handleSubCategoryChange(event: SelectChangeEvent) {
    setSubCategoryId(event.target.value as unknown as number);
  }

  function handleConditionChange(event: SelectChangeEvent) {
    setConditionId(event.target.value as unknown as number);
  }

  return (
    <>
      <div className={`${styles.detail} col-md-12`}>
        <div className={`col-md-12`}>
          <h5>Name</h5>
        </div>
        <div className="col-md-12">{edit ? textField('Name', product.name) : product.name}</div>
      </div>

      <div className={`${styles.detail} col-md-12`}>
        <div className={`col-md-12`}>
          <h5>Description</h5>
        </div>
        <div className="col-md-12">
          {edit ? textField('Description', product.description, true) : product.description}
        </div>
      </div>

      <div className={`${styles.detail} col-md-12`}>
        <div className={`col-md-12`}>
          <h5>Size</h5>
        </div>
        {edit ? textField('Size', product.size, true) : product.size}
      </div>

      <div className={`${styles.detail} col-md-12`}>
        <div className={`col-md-12`}>
          <h5>Size Type</h5>
        </div>
        <div className="col-md-12">
          {edit ? (
            <Select
              value={sizeTypeId as unknown as string}
              id="category-select"
              labelId="category-select-label"
              variant="standard"
              onChange={handleSizeTypeChange}
              className={styles['select-field']}
            >
              {sizeTypes.map((sizeType) => (
                <MenuItem value={sizeType.id} key={`sizeType-${sizeType.id}`}>
                  {sizeType.value}
                </MenuItem>
              ))}
            </Select>
          ) : (
            product.sizeTypeValue
          )}
        </div>
      </div>

      <div className={`${styles.detail} col-md-12`}>
        <div className={`col-md-12`}>
          <h5>Category</h5>
        </div>
        {edit ? (
          <Select
            value={categoryId as unknown as string}
            id="category-select"
            labelId="category-select-label"
            variant="standard"
            onChange={handleCategoryChange}
            className={styles['select-field']}
          >
            {categories.map((category) => (
              <MenuItem value={category.id} key={`category-${category.id}`}>
                {category.value}
              </MenuItem>
            ))}
          </Select>
        ) : (
          product.subCategory.category.value
        )}
      </div>

      <div className={`${styles.detail} col-md-12`}>
        <div className={`col-md-12`}>
          <h5>Sub Category</h5>
        </div>
        {edit ? (
          <Select
            value={subCategoryId as unknown as string}
            id="category-select"
            labelId="category-select-label"
            variant="standard"
            onChange={handleSubCategoryChange}
            className={styles['select-field']}
          >
            {subCategories.map((subCategory) => (
              <MenuItem value={subCategory.id} key={`subCategory-${subCategory.id}`}>
                {subCategory.value}
              </MenuItem>
            ))}
          </Select>
        ) : (
          product.subCategory.value
        )}
      </div>

      <div className={`${styles.detail} col-md-12`}>
        <div className={`col-md-12`} id="description-select-label">
          <h5>Condition</h5>
        </div>
        <div className="col-md-12">
          {edit ? (
            <Select
              value={conditionId as unknown as string}
              id="description-select"
              labelId="description-select-label"
              variant="standard"
              onChange={handleConditionChange}
              className={styles['select-field']}
            >
              {conditions.map((condition) => (
                <MenuItem value={condition.id} key={`condition-${condition.id}`}>
                  {condition.value}
                </MenuItem>
              ))}
            </Select>
          ) : (
            product.condition.value
          )}
        </div>
      </div>

      {product.brand && (
        <div className={`${styles.detail} col-md-12`}>
          <div className={`col-md-12`}>
            <h5>Brand</h5>
          </div>
          <div className="col-md-12">
            {edit ? textField('Brand', product.brand) : product.brand}
          </div>
        </div>
      )}

      {product.purchasePrice && (
        <div className={`${styles.detail} col-md-12`}>
          <div className={`col-md-12`}>
            <h5>Purchase Price</h5>
          </div>
          <div className="col-md-12">
            {edit
              ? textField('Purchase Price', product.purchasePrice as unknown as string)
              : product.purchasePrice}
          </div>
        </div>
      )}

      {product.purchaseDate && (
        <div className={`${styles.detail} col-md-12`}>
          <div className={`col-md-12`}>
            <h5>Purchase Date</h5>
          </div>
          <div className="col-md-12">
            {edit ? (
              <DatePicker
                value={purchaseDate}
                onChange={(newValue) => setPurchaseDate(newValue)}
                className={styles['date-picker']}
              />
            ) : (
              newDate
            )}
          </div>
        </div>
      )}
    </>
  );
}

export function convertDate(date: string) {
  const tIndex = date.indexOf('T');

  return date.substring(0, tIndex);
}
