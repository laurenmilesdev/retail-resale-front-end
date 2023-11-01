import ApiServiceResponse from '../../models/api-service-response';

export default interface ApiServiceInterface {
  get<T>(url: string, config?: object): Promise<ApiServiceResponse<T>>;

  post<T>(url: string, data?: object, config?: object): Promise<ApiServiceResponse<T>>;

  put<T>(url: string, data?: object, config?: object): Promise<ApiServiceResponse<T>>;

  delete<T>(url: string, config?: object): Promise<ApiServiceResponse<T>>;
}
