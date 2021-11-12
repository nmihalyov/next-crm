import Comment from './Comment';

describe('Comment:', () => {
  const setUp = props => shallow(<Comment {...props} />);
  const name = 'John Doe';
  const body = 'Comment body text'
  let component;

  beforeEach(() => {
    component = setUp({name, body});
  });

  it('renders CommentComponent', () => {
    const comment = component.find('Comment');

    expect(comment).toHaveLength(1);
  });

  it('renders author name\'s first letter', () => {
    const avatar = component.dive().find('Avatar');

    expect(avatar.text()).toBe(name.substr(0, 1).toUpperCase());
  });

  it('renders body text', () => {
    const paragraph = component.dive().find('Paragraph');

    expect(paragraph.children().text()).toBe(body);
  });
});