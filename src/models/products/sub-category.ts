/* eslint-disable import/no-cycle */
import Dropdown from '../dropdown';
import Category from './category';

export default class SubCategory extends Dropdown {
  category: Category;

  categoryId: number;

  constructor(id: number, value: string, category: Category, categoryId: number) {
    super(id, value);
    this.category = category;
    this.categoryId = categoryId;
  }
}
