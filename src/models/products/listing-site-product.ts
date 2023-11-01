/* eslint-disable import/no-cycle */
import Product from './product';
import ListingSite from './listing-site';

export default class ListingSiteProduct {
  constructor(
    public id: number,
    public product: Product,
    public productId: number,
    public listingSite: ListingSite,
    public listingSiteId: number,
    public listedPrice: number,
    public dateListed?: Date,
    public urlToListing?: string
  ) {}
}
