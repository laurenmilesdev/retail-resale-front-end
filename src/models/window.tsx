export default class Window {
  title: string;

  component?: JSX.Element;

  windowId?: string;

  buttonId?: string;

  constructor(title: string, component?: JSX.Element, windowId?: string, buttonId?: string) {
    this.title = title;
    this.component = component;
    this.windowId = windowId;
    this.buttonId = buttonId;
  }
}
