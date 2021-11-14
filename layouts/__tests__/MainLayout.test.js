import MainLayout from '../MainLayout';

describe('MainLayout:', () => {
  const setUp = props => shallow(<MainLayout {...props} />)
  const children = <div><p>Content</p></div>;

  it('renders MainLayout with default page title', () => {
    const component = setUp({children});

    expect(component).toMatchSnapshot();
  });

  it('renders MainLayout with custom page title', () => {
    const component = setUp({children, title: 'Main'});

    expect(component).toMatchSnapshot();
  });
});