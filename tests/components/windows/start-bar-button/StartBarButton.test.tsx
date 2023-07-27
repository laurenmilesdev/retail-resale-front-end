import { render } from '@testing-library/react';
import StartBarButton from '../../../../src/components/windows/start-bar-button/StartBarButton';
import { windows } from '../../../mocks/data-mock';

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: any) => <img {...props} />,
}));

describe('StartBarButton component', () => {
  it('renders button', () => {
    const window = windows[0];

    render(<StartBarButton window={window} index={1} />);

    const element = document.getElementById(window.buttonId ?? '') as HTMLButtonElement;

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(window.title);
  });
});
