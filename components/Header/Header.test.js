import Header from './Header';

describe('Header:', () => {
  it('renders Header', () => {
    const component = shallow(<Header />);

    expect(component).toMatchSnapshot();
  });
});