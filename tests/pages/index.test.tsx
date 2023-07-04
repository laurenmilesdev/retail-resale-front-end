import { render } from '@testing-library/react';

import Home from '../../src/pages/index';
import Tab from '../../src/models/Tab';

describe('Index page', () => {
  const pageValue = 0;
  const pages = [new Tab('Home', 'Home', <div id="home">Home</div>)];

  it('should render', () => {
    render(<Home pageValue={pageValue} pages={pages} />);

    const element = document.getElementById('home') as HTMLDivElement;

    expect(element).toHaveTextContent('Home');
  });
});
