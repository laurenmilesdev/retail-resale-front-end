import dayjs from 'dayjs';
import { Button } from '@mui/material';
import TextFieldInput from '../../inputs/text-field-input/TextFieldInput';
import SelectListInput from '../../inputs/select-list-input/SelectListInput';
import DatePickerInput from '../../inputs/date-picker-input/DatePickerInput';
import ProductFieldModel from '../../../models/product-field';
import TextFieldModel from '../../../models/text-field';
import SelectListModel from '../../../models/select-list';
import { FieldType } from '../../../enums/field-type';

import styles from './ProductForm.module.css';

type Props = {
  productFields: ProductFieldModel[];
};

export default function ProductForm({ productFields }: Props) {
  return (
    <form>
      {productFields.map((productField: ProductFieldModel) => (
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

export function getEditField(productField: ProductFieldModel) {
  const { fieldType } = productField;
  const { name } = productField;
  const { setValue } = productField;

  if (fieldType === FieldType.text || fieldType === FieldType.textMulti) {
    const textMulti = fieldType === FieldType.textMulti;
    const item = new TextFieldModel(name, productField.currentValue as string, textMulti);

    return <TextFieldInput textField={item} />;
  }

  if (fieldType === FieldType.select && setValue) {
    const item = new SelectListModel(
      name,
      productField.updatedValue as string,
      productField.selectListItems ?? []
    );

    return <SelectListInput selectList={item} setValue={setValue} />;
  }

  if (fieldType === FieldType.date && setValue) {
    const item = dayjs(productField.currentValue as string);

    return <DatePickerInput value={item} setValue={setValue} />;
  }

  return <></>;
}
