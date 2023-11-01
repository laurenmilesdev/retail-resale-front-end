import Dropdown from './models/dropdown';

export default class Constants {
  static SIZE_TYPES = [
    new Dropdown(1, 'Womens'),
    new Dropdown(2, 'Mens'),
    new Dropdown(3, 'Kids'),
    new Dropdown(4, 'None'),
  ];
}
