import ApiService from './api-service';
import ConditionServiceInterface from './interfaces/condition-service.interface';
import ServiceResponseModel from '../models/service-response';
import ConditionModel from '../models/products/condition';
import Utils from '../utils';

export default class ConditionService extends ApiService implements ConditionServiceInterface {
  constructor(public baseApiUrl: string) {
    super();
    this.baseApiUrl = baseApiUrl;
  }

  async getConditionById(
    id: number,
    config?: object
  ): Promise<ServiceResponseModel<ConditionModel>> {
    let condition: ConditionModel = <ConditionModel>{};
    const serviceResponse = new ServiceResponseModel(condition);
    const url = `${this.baseApiUrl}/Conditions/${id}`;

    try {
      const response = await super.get<ConditionModel>(url, config);

      if (response.status === 200 && response.data) {
        condition = response.data;
        serviceResponse.data = condition;
      }
    } catch (error: any) {
      serviceResponse.error = Utils.errorHandler(error);
    }

    return serviceResponse;
  }

  async getConditions(config?: object): Promise<ServiceResponseModel<ConditionModel[]>> {
    let condition: ConditionModel[] = [];
    const serviceResponse = new ServiceResponseModel(condition);
    const url = `${this.baseApiUrl}/Conditions`;

    try {
      const response = await super.get<ConditionModel[]>(url, config);

      if (response.status === 200 && response.data) {
        condition = response.data;
        serviceResponse.data = condition;
      }
    } catch (error: any) {
      serviceResponse.error = Utils.errorHandler(error);
    }

    return serviceResponse;
  }
}
