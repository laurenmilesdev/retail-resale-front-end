import ListingSiteProduct from '../../../src/models/products/listing-site-product';
import { listingSite, listingSiteProduct, product } from '../../mocks/data-mock';

describe('ListingSiteProduct', () => {
  it('returns ListingSite object', () => {
    const response = listingSiteProduct;
    const expectedResponse: ListingSiteProduct = {
      id: listingSiteProduct.id,
      product,
      productId: product.id,
      listingSite,
      listingSiteId: listingSite.id,
      listedPrice: listingSiteProduct.listedPrice,
    };

    expect(response).toEqual(expectedResponse);
  });
});
