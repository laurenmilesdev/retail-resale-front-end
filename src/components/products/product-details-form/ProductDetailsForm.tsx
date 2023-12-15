/* eslint-disable no-param-reassign */
import { Dispatch, SetStateAction } from 'react';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers';
import { Button, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import ProductModel from '../../../models/products/product';
import DropdownModel from '../../../models/dropdown';
import FormDetailModel from '../../../models/form-detail';
import Constants from '../../../constants';
import Utils from '../../../utils';

import styles from './ProductDetailsForm.module.css';

type Props = {
  edit: boolean;
  product: ProductModel;
  setProduct: Dispatch<SetStateAction<ProductModel | undefined>>;
  categories: DropdownModel[];
  subCategories: DropdownModel[];
  conditions: DropdownModel[];
};

export const productFormDetails = {
  name: new FormDetailModel('name', 'Name'),
  size: new FormDetailModel('size', 'Size'),
  sizeType: new FormDetailModel('sizeType', 'Size Type'),
  category: new FormDetailModel('categoryId', 'Category'),
  subCategory: new FormDetailModel('subCategoryId', 'SubCategory'),
  condition: new FormDetailModel('conditionId', 'Condition'),
  brand: new FormDetailModel('brand', 'Brand'),
  purchaseDate: new FormDetailModel('purchaseDate', 'Purchase Date'),
  purchasePrice: new FormDetailModel('purchasePrice', 'Purchase Price'),
  description: new FormDetailModel('description', 'Description'),
};

export default function ProductDetailsForm({
  edit,
  product,
  setProduct,
  categories,
  subCategories,
  conditions,
}: Props) {
  const {
    name,
    size,
    sizeType,
    category,
    subCategory,
    condition,
    brand,
    purchaseDate,
    purchasePrice,
    description,
  } = productFormDetails;
  sizeType.dropdownValues = Constants.SIZE_TYPES;
  category.dropdownValues = categories;
  subCategory.dropdownValues = subCategories;
  condition.dropdownValues = conditions;

  const labelComponent = (formDetail: FormDetailModel) => (
    <label id={formDetail.labelId}>
      <h5>{formDetail.label}</h5>
    </label>
  );
  const textFieldComponent = (formDetail: FormDetailModel, multiline = false) => (
    <TextField
      name={formDetail.name}
      defaultValue={product[formDetail.name as keyof ProductModel]}
      className={styles['text-field']}
      variant="standard"
      multiline={multiline}
    />
  );
  const selectListComponent = (formDetail: FormDetailModel) => (
    <Select
      value={product[formDetail.name as keyof ProductModel] as unknown as string}
      name={formDetail.name}
      labelId={formDetail.labelId}
      variant="standard"
      onChange={onChange}
      className={styles['select-field']}
    >
      {formDetail.dropdownValues?.map(({ id, value }: DropdownModel) => (
        <MenuItem value={id} key={value}>
          {value}
        </MenuItem>
      ))}
    </Select>
  );

  function onChange(event: SelectChangeEvent) {
    const eventName = event.target.name;
    const value = event.target.value as unknown as number;

    if (eventName) {
      if (eventName === sizeType.name) product.sizeType = value;
      if (eventName === category.name) product.categoryId = value;
      if (eventName === subCategory.name) product.subCategoryId = value;
      if (eventName === condition.name) product.conditionId = value;

      setProduct({ ...product });
    }
  }

  return (
    <form>
      <div className={`${styles.detail} col-md-12 pb-0`}>
        {labelComponent(name)}

        <div id={name.valueId}>{edit ? textFieldComponent(name) : product.name}</div>
      </div>

      <div className={`${styles['details-container']} col-md-12`}>
        <div className={`${styles['detail-column']} col-md-7`}>
          <div className={`${styles['detail-row']} col-md-12`}>
            <div className={`${styles.detail} col-md-6`}>
              {labelComponent(size)}

              <div id={size.valueId}>{edit ? textFieldComponent(size) : product.size}</div>
            </div>

            <div className={`${styles.detail} col-md-6`}>
              {labelComponent(sizeType)}

              <div id={sizeType.valueId}>
                {edit ? selectListComponent(sizeType) : product.sizeTypeValue}
              </div>
            </div>
          </div>

          <div className={`${styles['detail-row']} col-md-12`}>
            <div className={`${styles.detail} col-md-6`}>
              {labelComponent(category)}

              <div id={category.valueId}>
                {edit ? selectListComponent(category) : product.subCategory.category.value}
              </div>
            </div>

            <div className={`${styles.detail} col-md-6`}>
              {labelComponent(subCategory)}

              <div id={subCategory.valueId}>
                {edit ? selectListComponent(subCategory) : product.subCategory.value}
              </div>
            </div>
          </div>

          <div className={`${styles['detail-row']} col-md-12`}>
            <div className={`${styles.detail} col-md-6`}>
              {labelComponent(condition)}
              <div id={condition.valueId}>
                {edit ? selectListComponent(condition) : product.condition.value}
              </div>
            </div>

            <div className={`${styles.detail} col-md-6`}>
              {labelComponent(brand)}

              <div id={brand.valueId}>{edit ? textFieldComponent(brand) : product.brand}</div>
            </div>
          </div>

          <div className={`${styles['detail-row']} col-md-12`}>
            <div className={`${styles.detail} col-md-6`}>
              {labelComponent(purchaseDate)}

              <div id={purchaseDate.valueId}>
                {edit ? (
                  <DatePicker
                    value={dayjs(product.purchaseDate)}
                    className={styles['date-picker']}
                  />
                ) : (
                  <>{product.purchaseDate && Utils.formatDate(product.purchaseDate)}</>
                )}
              </div>
            </div>

            <div className={`${styles.detail} col-md-6`}>
              {labelComponent(purchasePrice)}

              <div id={purchasePrice.valueId}>
                {edit ? textFieldComponent(purchasePrice) : product.purchasePrice}
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles['detail-column']} col-md-5`}>
          <div className={`${styles.detail} col-md-12`}>
            {labelComponent(description)}

            {edit ? (
              <>
                {textFieldComponent(description, true)}
                <span className={styles.description}>{'(multiline editor)'}</span>
              </>
            ) : (
              <>{product.description}</>
            )}
          </div>
        </div>
      </div>

      {edit && (
        <div className={`col-md-12`}>
          <Button type="submit" className="btn-primary">
            Save
          </Button>
        </div>
      )}
    </form>
  );
}
