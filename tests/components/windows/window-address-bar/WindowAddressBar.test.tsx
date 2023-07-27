import { render } from '@testing-library/react';
import WindowAddressBar, {
  label,
  inputValue,
} from '../../../../src/components/windows/window-address-bar/WindowAddressBar';

describe('WindowAddressBar component', () => {
  beforeEach(() => {
    render(<WindowAddressBar />);
  });

  it('renders "Address" label', () => {
    const element = document.getElementById('window-address-bar-label') as HTMLDivElement;

    expect(element).toHaveTextContent(label as string);
  });

  it('renders text input box', () => {
    const element = document.getElementById('window-address-bar-input') as HTMLInputElement;

    expect(element.type).toEqual('text');
    expect(element.value).toEqual(inputValue);
    expect(element.readOnly).toEqual(true);
  });
});
