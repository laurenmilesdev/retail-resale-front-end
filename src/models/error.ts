import ApiError from './api-error';

export default class Error {
  constructor(public title: string, public description: string, public apiError?: ApiError) {}
}
