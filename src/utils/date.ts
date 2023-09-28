export function convertDate(date: string) {
  const tIndex = date.indexOf('T');

  return date.substring(0, tIndex);
}
