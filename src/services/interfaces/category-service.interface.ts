import ServiceResponseModel from '../../models/service-response';
import CategoryModel from '../../models/products/category';
import DropdownModel from '../../models/dropdown';

export default interface CategoryServiceInterface {
  getCategoryById(id: number, config?: object): Promise<ServiceResponseModel<CategoryModel>>;

  getCategories(config?: object): Promise<ServiceResponseModel<CategoryModel[]>>;

  getSubCategoriesByCategoryId(id: number): Promise<DropdownModel[]>;
}
