// eslint-disable-next-line import/no-cycle
import ListingSiteProduct from './listing-site-product';

export default class ListingSite {
  siteName: string;

  url?: string;

  listingSiteProducts?: ListingSiteProduct[];

  constructor(siteName: string, url?: string, listingSiteProducts?: ListingSiteProduct[]) {
    this.siteName = siteName;
    this.url = url;
    this.listingSiteProducts = listingSiteProducts;
  }
}
