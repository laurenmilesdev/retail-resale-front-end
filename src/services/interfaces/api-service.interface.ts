import ApiResponseModel from '../../models/api-response';

export default interface ApiServiceInterface {
  get<T>(url: string, config?: object): Promise<ApiResponseModel<T>>;

  post<T>(url: string, data?: object, config?: object): Promise<ApiResponseModel<T>>;

  put<T>(url: string, data?: object, config?: object): Promise<ApiResponseModel<T>>;

  delete<T>(url: string, config?: object): Promise<ApiResponseModel<T>>;
}
