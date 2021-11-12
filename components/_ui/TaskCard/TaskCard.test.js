import TaskCard from './TaskCard';

describe('TaskCard:', () => {
  const setUp = props => shallow(<TaskCard {...props} />);

  it('renders TaskCard', () => {
    const props = {
      userId: 1,
      id: 1,
      title: 'Task title',
      completed: false,
      onPatch: () => {},
      onRemove: () => {}
    };
    const component = setUp(props);

    expect(component).toMatchSnapshot();
  });

  it('title has completed class name if completed prop is true', () => {
    const component = setUp({completed: true});
    const title = component.find('Text');

    expect(title.hasClass(/titleDone/)).toBe(true);
  });

  it('calls onPatch with correct arguments after change', () => {
    const onPatch = jest.fn();
    const id = 1;
    const completed = true;
    const component = setUp({onPatch, id, completed});

    component.find('Checkbox').simulate('change');
    expect(onPatch).toHaveBeenCalledWith(id, !completed);
  });
});