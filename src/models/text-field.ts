export default class TextField {
  name: string;

  value: string;

  multiline?: boolean;

  constructor(name: string, value: string, multiline = false) {
    this.name = name;
    this.value = value;
    this.multiline = multiline;
  }
}
