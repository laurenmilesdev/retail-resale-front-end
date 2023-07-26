import WindowModel from '../../src/models/window';

export const windows = [
  new WindowModel('Page', <>Page</>, 'window-id-1', 'start-bar-button-id-1'),
  new WindowModel('Page 2', <>Page 2</>, 'window-id-2', 'start-bar-button-id-2'),
];

export const menuItems = [
  new WindowModel('Item 1', undefined, undefined, 'item-1-id'),
  new WindowModel('Item 2', undefined, undefined, 'item-2-id'),
  new WindowModel('Item 3', undefined, undefined, 'item-3-id'),
];
