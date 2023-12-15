import DropdownModel from './dropdown';

export default class FormDetail {
  labelId: string;

  valueId: string;

  constructor(public name: string, public label: string, public dropdownValues?: DropdownModel[]) {
    this.labelId = this.getId(this.name);
    this.valueId = this.getId(this.name, false);
  }

  getId(name: string, label = true) {
    return `${name}-detail-${label ? 'label' : 'value'}`;
  }
}
