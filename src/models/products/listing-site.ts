// eslint-disable-next-line import/no-cycle
import ListingSiteProduct from './listing-site-product';

export default class ListingSite {
  id: number;

  siteName: string;

  url?: string;

  listingSiteProducts?: ListingSiteProduct[];

  constructor(
    id: number,
    siteName: string,
    url?: string,
    listingSiteProducts?: ListingSiteProduct[]
  ) {
    this.id = id;
    this.siteName = siteName;
    this.url = url;
    this.listingSiteProducts = listingSiteProducts;
  }
}
