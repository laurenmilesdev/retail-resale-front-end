import Dropdown from './dropdown';

export default class SelectList {
  value: string;

  name: string;

  selectListItems: Dropdown[];

  constructor(value: string, name: string, selectListItems: Dropdown[]) {
    this.value = value;
    this.name = name;
    this.selectListItems = selectListItems;
  }
}
