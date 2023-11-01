import Dropdown from './models/dropdown';

export default class Constants {
  static SIZE_TYPES = [
    new Dropdown(0, 'Womens'),
    new Dropdown(1, 'Mens'),
    new Dropdown(2, 'Kids'),
    new Dropdown(3, 'None'),
  ];
}
