import ServiceResponseModel from '../../models/service-response';
import ConditionModel from '../../models/products/condition';

export default interface ConditionServiceInterface {
  getConditionById(id: number, config?: object): Promise<ServiceResponseModel<ConditionModel>>;

  getConditions(config?: object): Promise<ServiceResponseModel<ConditionModel[]>>;
}
