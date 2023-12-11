import ApiErrorModel from './models/api-error';
import ErrorModel from './models/error';

export default class Utils {
  static formatDate(date: string) {
    const tIndex = date.indexOf('T');

    return date.substring(0, tIndex);
  }

  static getErrorModel(title: string, description: string, err?: any) {
    const apiError = err
      ? new ApiErrorModel(err.name as string, err.code as string, err.message as string)
      : undefined;

    return new ErrorModel(title, description, apiError);
  }
}
