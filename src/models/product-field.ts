import { Dispatch, SetStateAction } from 'react';
import Dropdown from './dropdown';
import { FieldType } from '../enums/field-type';

export default class ProductField {
  name: string;

  currentValue: any;

  fieldType: FieldType;

  updatedValue?: any;

  setValue?: Dispatch<SetStateAction<any | undefined>>;

  selectListItems?: Dropdown[];

  constructor(
    name: string,
    currentValue: any,
    fieldType: FieldType,
    setValue?: Dispatch<SetStateAction<any | undefined>>,
    updatedValue?: any,
    selectListItems?: Dropdown[]
  ) {
    this.name = name;
    this.currentValue = currentValue;
    this.fieldType = fieldType;
    this.setValue = setValue;
    this.updatedValue = updatedValue;
    this.selectListItems = selectListItems;
  }
}
