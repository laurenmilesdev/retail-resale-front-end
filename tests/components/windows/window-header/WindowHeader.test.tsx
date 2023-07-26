import React from 'react';
import { render } from '@testing-library/react';
import WindowHeader from '../../../../src/components/windows/window-header/WindowHeader';

describe('WindowHeader component', () => {
  const windowTitle = 'Title';

  beforeEach(() => {
    render(<WindowHeader title={windowTitle} />);
  });

  it('renders "Address" label', () => {
    const element = document.getElementById(
      `${windowTitle.toLocaleLowerCase()}-window-header-label`
    ) as HTMLLabelElement;

    expect(element).toHaveTextContent(windowTitle);
  });

  it('renders minimize button', () => {
    const element = document.getElementById(
      `${windowTitle.toLocaleLowerCase()}-window-header-minimize-btn`
    ) as HTMLLabelElement;

    expect(element).toBeInTheDocument();
  });

  it('renders close button', () => {
    const element = document.getElementById(
      `${windowTitle.toLocaleLowerCase()}-window-header-close-btn`
    ) as HTMLLabelElement;

    expect(element).toBeInTheDocument();
  });
});
