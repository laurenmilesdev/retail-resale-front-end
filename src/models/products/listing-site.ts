// eslint-disable-next-line import/no-cycle
import ListingSiteProduct from './listing-site-product';

export default class ListingSite {
  constructor(
    public id: number,
    public siteName: string,
    public url?: string,
    public listingSiteProducts?: ListingSiteProduct[]
  ) {}
}
