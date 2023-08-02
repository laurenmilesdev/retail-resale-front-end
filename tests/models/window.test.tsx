import Window from '../../src/models/window';

describe('Window', () => {
  const title = 'Title';
  const component: JSX.Element = <div>Test</div>;
  const windowId = 'window-id';
  const buttonId = 'btn-id';

  it('returns Window object without IDs', () => {
    const response = new Window(title, component);
    const expectedResponse: Window = {
      title,
      component,
    };

    expect(response).toEqual(expectedResponse);
  });

  it('returns Window object with IDs', () => {
    const response = new Window(title, component, windowId, buttonId);
    const expectedResponse: Window = {
      title,
      component,
      windowId,
      buttonId,
    };

    expect(response).toEqual(expectedResponse);
  });
});
