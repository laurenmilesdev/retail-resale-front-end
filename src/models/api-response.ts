export default class ApiResponse<T> {
  constructor(public data: T, public status: number, public statusText: string) {}
}
