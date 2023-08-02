export default class ApiServiceResponse<T> {
  data: T;

  status: number;

  statusText: string;

  constructor(data: T, status: number, statusText: string) {
    this.data = data;
    this.status = status;
    this.statusText = statusText;
  }
}
