import Loader from './Loader';

describe('Loader:', () => {
  it('renders loader element', () => {
    const component = shallow(<Loader />);
    const loader = component.find('.loader');

    expect(loader).toHaveLength(1);
  });
});