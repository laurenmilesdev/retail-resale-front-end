import React from 'react';
import { render } from '@testing-library/react';
import StartMenu from '../../../../src/components/windows/start-menu/StartMenu';
import { shutdownLabelText } from '../../../../src/components/windows/start-menu-item/StartMenuItem';
import WindowModel from '../../../../src/models/window';

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: any) => <img {...props} />,
}));

describe('StartMenu component', () => {
  const menuItems = [
    new WindowModel('Item 1', undefined, undefined, 'item-1-id'),
    new WindowModel('Item 2', undefined, undefined, 'item-2-id'),
    new WindowModel('Item 3', undefined, undefined, 'item-3-id'),
  ];

  beforeEach(() => {
    render(<StartMenu menuItems={menuItems} />);
  });

  it('renders "Windows98" sidebar', () => {
    const element = document.getElementById('start-menu') as HTMLDivElement;

    expect(element).toHaveTextContent('Windows98');
  });

  it('renders correct menu items', () => {
    menuItems.forEach((menuItem: WindowModel) => {
      const element = document.getElementById(menuItem.buttonId ?? '') as HTMLLabelElement;

      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent(menuItem.title);
    });
  });

  it('renders shutdown button', () => {
    const shutdownElement = document.getElementById('shutdown-menu-item') as HTMLLabelElement;

    expect(shutdownElement).toBeInTheDocument();
    expect(shutdownElement).toHaveTextContent(shutdownLabelText);
  });
});
