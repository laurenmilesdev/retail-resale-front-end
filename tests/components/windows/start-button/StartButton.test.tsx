import { render } from '@testing-library/react';
import StartButton from '../../../../src/components/windows/start-button/StartButton';

describe('StartButton component', () => {
  beforeEach(() => {
    render(<StartButton />);
  });

  it('renders button', () => {
    const element = document.getElementById('windows-start-btn') as HTMLButtonElement;

    expect(element).toBeInTheDocument();
  });
});
