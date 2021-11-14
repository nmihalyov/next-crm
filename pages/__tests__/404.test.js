import NotFoundPage from '../404';

describe('NotFoundPage:', () => {
  it('renders 404 page', () => {
    const component = shallow(<NotFoundPage />);

    expect(component).toMatchSnapshot();
  });
});