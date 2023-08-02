import { render, screen } from '@testing-library/react';
import Loading from '../../../src/components/loading/Loading';

describe('Loading component', () => {
  it('renders children when loaded is true', () => {
    render(
      <Loading loaded={true}>
        <div>Test</div>
      </Loading>
    );
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
  });

  it('renders circular progress bar when loaded is false', () => {
    render(
      <Loading loaded={false}>
        <div>Test</div>
      </Loading>
    );
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
    expect(screen.queryByText('Test')).not.toBeInTheDocument();
  });
});
