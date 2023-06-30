export default class Tab {
  label: string;

  title: string;

  component: JSX.Element;

  constructor(label: string, title: string, component: JSX.Element) {
    this.label = label;
    this.title = title;
    this.component = component;
  }
}
