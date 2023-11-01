export default class Utils {
  static formatDate(date: string) {
    const tIndex = date.indexOf('T');

    return date.substring(0, tIndex);
  }
}
