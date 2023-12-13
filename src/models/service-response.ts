import Error from './error';

export default class ServiceResponse<T> {
  constructor(public data: T, public error?: Error) {}
}
