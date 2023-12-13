/* eslint-disable no-plusplus */
import { render } from '@testing-library/react';
import ProductDetails from '../../../../src/components/products/product-details/ProductDetails'; //   columns,
import { productDetails } from '../../../mocks/data-mock';
import ProductDetailModel from '../../../../src/models/product-detail';

describe('ProductsDetails component', () => {
  beforeEach(() => {
    render(<ProductDetails productDetails={productDetails} />);
  });

  it('renders correct labels', () => {
    productDetails.forEach(({ name }: ProductDetailModel, index: number) => {
      const element = document.getElementById(`product-detail-name-${index}`);

      expect(element).toHaveTextContent(name);
    });
  });

  it('renders correct values', () => {
    productDetails.forEach(({ value }: ProductDetailModel, index: number) => {
      const element = document.getElementById(`product-detail-value-${index}`);

      expect(element).toHaveTextContent((value as string) ?? '');
    });
  });
});
