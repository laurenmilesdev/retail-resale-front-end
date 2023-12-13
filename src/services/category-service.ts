import ApiService from './api-service';
import CategoryServiceInterface from './interfaces/category-service.interface';
import ServiceResponseModel from '../models/service-response';
import CategoryModel from '../models/products/category';
import DropdownModel from '../models/dropdown';
import Utils from '../utils';

export default class CategoryService extends ApiService implements CategoryServiceInterface {
  constructor(public baseApiUrl: string) {
    super();
    this.baseApiUrl = baseApiUrl;
  }

  async getCategoryById(id: number, config?: object): Promise<ServiceResponseModel<CategoryModel>> {
    let category: CategoryModel = <CategoryModel>{};
    const serviceResponse = new ServiceResponseModel(category);
    const url = `${this.baseApiUrl}/Categories/${id}`;

    try {
      const response = await super.get<CategoryModel>(url, config);

      if (response.status === 200 && response.data) category = response.data;
    } catch (error: any) {
      serviceResponse.error = Utils.errorHandler(error);
    }

    return serviceResponse;
  }

  async getCategories(config?: object): Promise<ServiceResponseModel<CategoryModel[]>> {
    let categories: CategoryModel[] = [];
    const serviceResponse = new ServiceResponseModel(categories);
    const url = `${this.baseApiUrl}/Categories`;

    try {
      const response = await super.get<CategoryModel[]>(url, config);

      if (response.status === 200 && response.data) categories = response.data;
    } catch (error: any) {
      serviceResponse.error = Utils.errorHandler(error);
    }

    return serviceResponse;
  }

  async getSubCategoriesByCategoryId(id: number): Promise<DropdownModel[]> {
    const categoryResponse = await this.getCategoryById(id);

    return categoryResponse.data.subCategories
      ? categoryResponse.data.subCategories?.map(
          (subCategory) => new DropdownModel(subCategory.id, subCategory.value)
        )
      : [];
  }
}
