import { Dispatch, SetStateAction } from 'react';
import { Button, SelectChangeEvent } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import TextFieldInput from '../../inputs/text-field-input/TextFieldInput';
import SelectListInput from '../../inputs/select-list-input/SelectListInput';
import DatePickerInput from '../../inputs/date-picker-input/DatePickerInput';
import ProductFieldModel from '../../../models/product-field';
import TextFieldModel from '../../../models/text-field';
import SelectListModel from '../../../models/select-list';

import styles from './ProductForm.module.css';
import { FieldType } from '@/enums/field-type';

type Props = {
  productFields: ProductFieldModel[];
  setSizeTypeId: Dispatch<SetStateAction<number | undefined>>;
  setCategoryId: Dispatch<SetStateAction<number | undefined>>;
  setSubCategoryId: Dispatch<SetStateAction<number | undefined>>;
  setConditionId: Dispatch<SetStateAction<number | undefined>>;
  setPurchaseDate: Dispatch<SetStateAction<dayjs.Dayjs | null | undefined>>;
};

export default function ProductForm({
  productFields,
  setSizeTypeId,
  setCategoryId,
  setSubCategoryId,
  setConditionId,
  setPurchaseDate,
}: Props) {
  function handleChange(event: SelectChangeEvent) {
    const { name } = event.target;
    const { value } = event.target;

    if (name === 'Size Type') setSizeTypeId(value as unknown as number);
    if (name === 'Category') setCategoryId(value as unknown as number);
    if (name === 'SubCategory') setSubCategoryId(value as unknown as number);
    if (name === 'Condition') setConditionId(value as unknown as number);
    if (name === 'Purchase Date') setPurchaseDate(value as unknown as Dayjs);
  }

  function getEditField(productField: ProductFieldModel) {
    const { fieldType } = productField;
    const { name } = productField;
    const { currentValue } = productField;
    const { updatedValue } = productField;
    const { selectListItems } = productField;

    if (fieldType === FieldType.text || fieldType === FieldType.textMulti) {
      const item = new TextFieldModel(
        name,
        currentValue as string,
        fieldType === FieldType.textMulti
      );

      return <TextFieldInput textField={item} />;
    }

    if (fieldType === FieldType.select) {
      const item = new SelectListModel(name, updatedValue as string, selectListItems ?? []);

      return <SelectListInput selectList={item} handleChange={handleChange} />;
    }

    if (fieldType === FieldType.date) {
      const item = dayjs(productField.currentValue as string);

      return <DatePickerInput value={item} setValue={setPurchaseDate} />;
    }

    return <></>;
  }

  return (
    <form>
      {productFields.map((productField) => (
        <div className={`${styles.detail} col-md-12`} key={productField.name}>
          <div className={`col-md-12`}>
            <h5>{productField.name}</h5>
          </div>
          <div className="col-md-12">{getEditField(productField)}</div>
        </div>
      ))}

      <Button type="submit" className="btn-primary">
        Save
      </Button>
    </form>
  );
}
