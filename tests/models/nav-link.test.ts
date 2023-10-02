import NavLink from '../../src/models/nav-link';

describe('NavLink', () => {
  const name = 'Link 1';
  const path = 'http://navlink.com';

  it('returns NavLink object', () => {
    const response = new NavLink(name, path);
    const expectedResponse: NavLink = { name, path };

    expect(response).toEqual(expectedResponse);
  });
});
