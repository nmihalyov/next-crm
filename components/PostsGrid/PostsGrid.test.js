import PostsGrid from './PostsGrid';

describe('PostsGrid:', () => {
  const setUp = props => shallow(<PostsGrid {...props} />);
  const posts = [{userId: 1, id: 1, title: 'Title', body: 'Post body text'}];

  it('renders component if any posts', () => {
    const component = setUp({posts});

    expect(component).toMatchSnapshot();
  });

  it('renders empty element if no posts', () => {
    const component = setUp();
    const empty = component.find('Empty');

    expect(empty).toMatchSnapshot();
  });
});