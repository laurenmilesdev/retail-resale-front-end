/* eslint-disable no-param-reassign */
import { Dispatch, SetStateAction, useState } from 'react';
import { Button, SelectChangeEvent } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import TextFieldInput from '../../text-field-input/TextFieldInput';
import SelectListInput from '../../select-list-input/SelectListInput';
import ProductModel from '../../../models/products/product';
import DropdownModel from '../../../models/dropdown';
import TextFieldModel from '../../../models/text-field';
import SelectListModel from '../../../models/select-list';
import { sizeTypes } from '../../../constants/size-type';

import styles from './ProductForm.module.css';

type Props = {
  product: ProductModel;
  sizeTypeId: number;
  setSizeTypeId: Dispatch<SetStateAction<number | undefined>>;
  categoryId: number;
  setCategoryId: Dispatch<SetStateAction<number | undefined>>;
  categories: DropdownModel[];
  subCategoryId: number;
  setSubCategoryId: Dispatch<SetStateAction<number | undefined>>;
  subCategories: DropdownModel[];
  conditionId: number;
  setConditionId: Dispatch<SetStateAction<number | undefined>>;
  conditions: DropdownModel[];
};

export default function ProductForm({
  product,
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
}: Props) {
  const newDate = product.purchaseDate ? convertDate(product.purchaseDate) : null;
  const [purchaseDate, setPurchaseDate] = useState<Dayjs | null>(newDate ? dayjs(newDate) : null);

  function handleChange(event: SelectChangeEvent) {
    const { name } = event.target;
    const { value } = event.target;

    if (name === 'sizeType') setSizeTypeId(value as unknown as number);
    if (name === 'category') setCategoryId(value as unknown as number);
    if (name === 'subCategory') setSubCategoryId(value as unknown as number);
    if (name === 'condition') setConditionId(value as unknown as number);
  }

  const textField = (name: string, value: string, multiline = false) => {
    const item = new TextFieldModel(value, name, multiline);

    return <TextFieldInput textField={item} />;
  };
  const selectListItem = (name: string, value: string, listItems: DropdownModel[]) => {
    const item = new SelectListModel(value, name, listItems);

    return <SelectListInput selectList={item} handleChange={handleChange} />;
  };
  const productFields = [
    { name: 'Name', value: product.name, editField: textField('name', product.name) },
    {
      name: 'Description',
      value: product.description,
      editField: textField('description', product.description, true),
    },
    { name: 'Size', value: product.size, editField: textField('size', product.size, true) },
    {
      name: 'Size Type',
      value: product.sizeTypeValue,
      editField: selectListItem('sizeType', sizeTypeId as unknown as string, sizeTypes),
    },
    {
      name: 'Category',
      value: product.subCategory.category.value,
      editField: selectListItem('category', categoryId as unknown as string, categories),
    },
    {
      name: 'SubCategory',
      value: product.subCategory.value,
      editField: selectListItem('subCategory', subCategoryId as unknown as string, subCategories),
    },
    {
      name: 'Condition',
      value: product.condition.value,
      editField: selectListItem('condition', conditionId as unknown as string, conditions),
    },
    { name: 'Brand', value: product.brand, editField: textField('brand', product.brand ?? '') },
    {
      name: 'Purchase Price',
      value: product.purchasePrice,
      editField: textField('purchasePrice', product.purchasePrice as unknown as string),
    },
    {
      name: 'Purchase Date',
      value: newDate,
      editField: (
        <DatePicker
          value={purchaseDate}
          onChange={(newValue) => setPurchaseDate(newValue)}
          className={styles['date-picker']}
        />
      ),
    },
  ];

  return (
    <form>
      {productFields.map((productField) => (
        <div className={`${styles.detail} col-md-12`} key={productField.name}>
          <div className={`col-md-12`}>
            <h5>{productField.name}</h5>
          </div>
          <div className="col-md-12">{productField.editField}</div>
        </div>
      ))}

      <Button type="submit" className="btn-primary">
        Save
      </Button>
    </form>
  );
}

export function convertDate(date: string) {
  const tIndex = date.indexOf('T');

  return date.substring(0, tIndex);
}
