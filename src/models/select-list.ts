import Dropdown from './dropdown';

export default class SelectList {
  name: string;

  value: string;

  selectListItems: Dropdown[];

  constructor(name: string, value: string, selectListItems: Dropdown[]) {
    this.name = name;
    this.value = value;
    this.selectListItems = selectListItems;
  }
}
