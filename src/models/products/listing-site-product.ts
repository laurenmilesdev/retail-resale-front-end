/* eslint-disable import/no-cycle */
import Product from './product';
import ListingSite from './listing-site';

export default class ListingSiteProduct {
  id: number;

  product: Product;

  productId: number;

  listingSite: ListingSite;

  listingSiteId: number;

  listedPrice: number;

  dateListed?: Date;

  urlToListing?: string;

  constructor(
    id: number,
    product: Product,
    productId: number,
    listingSite: ListingSite,
    listingSiteId: number,
    listedPrice: number,
    dateListed?: Date,
    urlToListing?: string
  ) {
    this.id = id;
    this.product = product;
    this.productId = productId;
    this.listingSite = listingSite;
    this.listingSiteId = listingSiteId;
    this.listedPrice = listedPrice;
    this.dateListed = dateListed;
    this.urlToListing = urlToListing;
  }
}
