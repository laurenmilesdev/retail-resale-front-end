import ApiService from './api-service';
import ConditionServiceInterface from './interfaces/condition-service.interface';
import ConditionModel from '../models/products/condition';

export default class ConditionService extends ApiService implements ConditionServiceInterface {
  baseApiUrl: string;

  constructor(baseApiUrl: string) {
    super();
    this.baseApiUrl = baseApiUrl;
  }

  async getConditionById(id: number, config?: object): Promise<ConditionModel> {
    const url = `${this.baseApiUrl}/Conditions/${id}`;
    const response = await super.get<ConditionModel>(url, config);
    let condition: ConditionModel = <ConditionModel>{};

    if (response.status === 200 && response.data) condition = response.data;

    return condition;
  }

  async getConditions(config?: object): Promise<ConditionModel[]> {
    const url = `${this.baseApiUrl}/Conditions`;
    const response = await super.get<ConditionModel[]>(url, config);
    let condition: ConditionModel[] = [];

    if (response.status === 200 && response.data) condition = response.data;

    return condition;
  }
}
