import { render } from '@testing-library/react';
import WindowOptions, {
  imageAltText,
} from '../../../../src/components/windows/window-options/WindowOptions';

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: any) => <img {...props} />,
}));

describe('WindowOptions component', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  beforeEach(() => {
    render(<WindowOptions options={options} />);
  });

  it('renders options', () => {
    options.map((option: string, index: number) => {
      const element = document.getElementById(`option-${index}`) as HTMLDivElement;

      expect(element).toHaveTextContent(option);
    });
  });

  it('renders photo with alt text', () => {
    const element = document.getElementById('window-options-windows-logo') as HTMLImageElement;

    expect(element.alt).toEqual(imageAltText);
  });
});
