import { render } from '@testing-library/react';
import Footer from '../../../src/components/footer/Footer';

describe('Footer component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('renders ThemeSwitch', () => {
    const element = document.getElementById('theme-switch') as HTMLSpanElement;

    expect(element).toBeInTheDocument();
  });
});
