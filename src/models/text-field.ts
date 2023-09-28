export default class TextField {
  value: string;

  name: string;

  multiline?: boolean;

  constructor(value: string, name: string, multiline = false) {
    this.value = value;
    this.name = name;
    this.multiline = multiline;
  }
}
