export default class ApiServiceResponse<T> {
  constructor(public data: T, public status: number, public statusText: string) {}
}
