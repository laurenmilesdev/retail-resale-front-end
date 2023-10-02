/* eslint-disable import/no-cycle */
import Dropdown from '../dropdown';
import SubCategory from './sub-category';

export default class Category extends Dropdown {
  subCategories?: SubCategory[];

  constructor(id: number, value: string, subCategories?: SubCategory[]) {
    super(id, value);
    this.subCategories = subCategories;
  }
}
