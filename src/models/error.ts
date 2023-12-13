export default class Error {
  constructor(
    public name: string,
    public code: string,
    public message: string,
    public status: number,
    public statusText: string
  ) {}
}
