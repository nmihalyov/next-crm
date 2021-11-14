import HomePage from '../index';

describe('HomePage:', () => {
  it('renders home page', () => {
    const component = shallow(<HomePage />);

    expect(component).toMatchSnapshot();
  });
});