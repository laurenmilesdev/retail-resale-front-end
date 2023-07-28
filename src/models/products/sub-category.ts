import Category from './category';

export default class SubCategory {
  category: Category;

  categoryId: number;

  value: string;

  constructor(category: Category, categoryId: number, value: string) {
    this.category = category;
    this.categoryId = categoryId;
    this.value = value;
  }
}
