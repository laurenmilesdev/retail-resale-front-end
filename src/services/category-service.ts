import ApiService from './api-service';
import CategoryServiceInterface from './interfaces/category-service.interface';
import CategoryModel from '../models/products/category';
import DropdownModel from '../models/dropdown';

export default class CategoryService extends ApiService implements CategoryServiceInterface {
  constructor(public baseApiUrl: string) {
    super();
    this.baseApiUrl = baseApiUrl;
  }

  async getCategoryById(id: number, config?: object): Promise<CategoryModel> {
    const url = `${this.baseApiUrl}/Categories/${id}`;
    const response = await super.get<CategoryModel>(url, config);
    let category: CategoryModel = <CategoryModel>{};

    if (response.status === 200 && response.data) category = response.data;

    return category;
  }

  async getCategories(config?: object): Promise<CategoryModel[]> {
    const url = `${this.baseApiUrl}/Categories`;
    const response = await super.get<CategoryModel[]>(url, config);
    let categories: CategoryModel[] = [];

    if (response.status === 200 && response.data) categories = response.data;

    return categories;
  }

  async getSubCategoriesByCategoryId(id: number): Promise<DropdownModel[]> {
    const category = await this.getCategoryById(id);

    return category.subCategories
      ? category.subCategories?.map(
          (subCategory) => new DropdownModel(subCategory.id, subCategory.value)
        )
      : [];
  }
}
