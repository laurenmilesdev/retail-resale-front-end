import ErrorModel from './models/error';

export default class Utils {
  static formatDate(date?: string) {
    if (date) {
      const tIndex = date.indexOf('T');

      return date.substring(0, tIndex);
    }

    return 'N/A';
  }

  static errorHandler(error: any) {
    const { name, code, message } = error;
    const { status, statusText } = error.response || {};

    return new ErrorModel(
      name as string,
      code as string,
      message as string,
      status as number,
      (statusText as string) ?? 'N/A'
    );
  }
}
