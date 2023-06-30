import { render } from '@testing-library/react';
import ThemeSwitch from '../../../src/components/theme-switch/ThemeSwitch';

describe('ThemeSwitch component', () => {
  beforeEach(() => {
    render(<ThemeSwitch />);
  });

  it('renders switch', () => {
    const element = document.getElementById('theme-switch') as HTMLSpanElement;

    expect(element).toBeInTheDocument();
  });
});
