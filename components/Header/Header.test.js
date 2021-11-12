import Header from './Header';

describe('Header:', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Header />);
  });

  it('renders header', () => {
    const header = component.find('.header');

    expect(header).toHaveLength(1);
  });

  it('renders menu', () => {
    const menu = component.find('Menu');

    expect(menu).toHaveLength(1);
  });

  it('renders logout button', () => {
    const button = component.find('Button');

    expect(button.children().text()).toBe('Logout');
  });
});