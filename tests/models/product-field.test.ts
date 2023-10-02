import ProductField from '../../src/models/product-field';
import { FieldType } from '../../src/enums/field-type';
import Dropdown from '../../src/models/dropdown';

describe('ProductField', () => {
  const name = 'Product Field Name';
  const currentValue = 1;
  const fieldType = FieldType.select;
  const setValue = () => undefined;
  const updatedValue = 2;
  const selectListItems = [new Dropdown(1, 'value 1'), new Dropdown(2, 'value 2')];

  it('returns ProductField object', () => {
    const response = new ProductField(
      name,
      currentValue,
      fieldType,
      setValue,
      updatedValue,
      selectListItems
    );
    const expectedResponse: ProductField = {
      name,
      currentValue,
      fieldType,
      setValue,
      updatedValue,
      selectListItems,
    };

    expect(response).toEqual(expectedResponse);
  });
});
