/* eslint-disable no-plusplus */
import { render } from '@testing-library/react';
import ProductsTable, {
  columns,
} from '../../../../src/components/products/products-table/ProductsTable'; //   columns,
import { products } from '../../../mocks/data-mock';

describe('ProductsTable component', () => {
  beforeEach(() => {
    render(<ProductsTable products={products} />);
  });

  it('renders correct column headers', () => {
    const elements = document.getElementsByClassName('table-header');

    for (let i = 0; i < elements.length; i++) {
      const elementText = elements[i].textContent;

      expect(elementText).toEqual(columns[i].headerName);
    }
  });

  it('renders correct rows', () => {
    const elements = document.getElementsByClassName('MuiDataGrid-row');

    for (let i = 0; i < elements.length; i++) {
      const { children } = elements[i];
      const product = products[i];

      for (let j = 0; j < children.length; j++) {
        const column = columns[j].field;
        const childText = children[j].textContent;
        const expectedResponse =
          column === 'name'
            ? product.name
            : column === 'description'
            ? product.description
            : column === 'size'
            ? product.size
            : column === 'categoryId'
            ? product.subCategory.category.value
            : column === 'subCategoryId'
            ? product.subCategory.value
            : column === product.brand
            ? product.brand
            : '';

        expect(childText).toEqual(expectedResponse);
      }
    }
  });
});
