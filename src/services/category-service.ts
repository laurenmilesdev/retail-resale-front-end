import ApiService from './api-service';
import CategoryModel from '../models/products/category';

export default class CategoryService extends ApiService {
  baseApiUrl: string;

  constructor(baseApiUrl: string) {
    super();
    this.baseApiUrl = baseApiUrl;
  }

  async getCategoryById(id: number, config?: object): Promise<CategoryModel> {
    const url = `${this.baseApiUrl}/Categories/${id}`;
    const response = await super.get(url, config);
    let category: CategoryModel = <CategoryModel>{};

    if (response.status === 200 && response.data) category = response.data as CategoryModel;

    return category;
  }

  async getCategories(config?: object): Promise<CategoryModel[]> {
    const url = `${this.baseApiUrl}/Categories`;
    const response = await super.get(url, config);
    let categories: CategoryModel[] = [];

    if (response.status === 200 && response.data) categories = response.data as CategoryModel[];

    return categories;
  }
}
