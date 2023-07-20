import { render } from '@testing-library/react';

import Home from '../../src/pages/index';

describe('Index page', () => {
  it('should render', () => {
    render(<Home />);

    const element = document.getElementById('home') as HTMLDivElement;

    expect(element).toHaveTextContent('Home');
  });
});
