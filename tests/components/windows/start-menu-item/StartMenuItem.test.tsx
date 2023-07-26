import React from 'react';
import { render } from '@testing-library/react';
import StartMenuItem, {
  shutdownLabelText,
} from '../../../../src/components/windows/start-menu-item/StartMenuItem';
import { menuItems } from '../../../mocks/data-mock';

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: any) => <img {...props} />,
}));

describe('StartMenuItem component', () => {
  const menuItem = menuItems[0];

  it('renders menu item', () => {
    render(<StartMenuItem menuItems={menuItems} menuItem={menuItem} />);

    const element = document.getElementById(menuItem.buttonId ?? '') as HTMLLabelElement;

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(menuItem.title);
  });

  it('renders shutdown menu item if page and index are undefined', () => {
    render(<StartMenuItem menuItems={menuItems} menuItem={menuItem} shutDownButton={true} />);

    const element = document.getElementById('shutdown-menu-item') as HTMLLabelElement;

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(shutdownLabelText);
  });
});
