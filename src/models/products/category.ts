/* eslint-disable import/no-cycle */
import Dropdown from '../dropdown';
import SubCategory from './sub-category';

export default class Category extends Dropdown {
  constructor(id: number, value: string, public subCategories?: SubCategory[]) {
    super(id, value);
  }
}
