/* eslint-disable import/no-cycle */
import Dropdown from '../dropdown';
import Category from './category';

export default class SubCategory extends Dropdown {
  constructor(id: number, value: string, public category: Category, public categoryId: number) {
    super(id, value);
  }
}
