import { render } from '@testing-library/react';
import TabPanel from '../../../src/components/tab-panel/TabPanel';

describe('TabPanel component', () => {
  const index = 0;
  const content = 'This is content.';

  beforeEach(() => {
    render(<TabPanel index={index} value={index} children={<>{content}</>} />);
  });

  it('renders tab content', () => {
    const element = document.getElementById(`tabpanel-${index}`) as HTMLDivElement;

    expect(element).toHaveTextContent(content);
  });
});
