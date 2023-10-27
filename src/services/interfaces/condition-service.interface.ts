import ConditionModel from '../../models/products/condition';

export default interface ConditionServiceInterface {
  getConditionById(id: number, config?: object): Promise<ConditionModel>;

  getConditions(config?: object): Promise<ConditionModel[]>;
}
