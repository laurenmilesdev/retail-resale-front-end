import CategoryModel from '../../models/products/category';
import DropdownModel from '../../models/dropdown';

export default interface CategoryServiceInterface {
  getCategoryById(id: number, config?: object): Promise<CategoryModel>;

  getCategories(config?: object): Promise<CategoryModel[]>;

  getSubCategoriesByCategoryId(id: number): Promise<DropdownModel[]>;
}
