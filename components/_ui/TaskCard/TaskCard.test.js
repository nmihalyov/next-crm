import TaskCard from './TaskCard';

describe('TaskCard:', () => {
  const setUp = props => shallow(<TaskCard {...props} />);

  it('contains checkbox', () => {
    const component = setUp();
    const checkbox = component.find('Checkbox');

    expect(checkbox).toHaveLength(1);
  });

  it('contains remove button', () => {
    const component = setUp();
    const button = component.find('Button');

    expect(button.length).toBe(1);
  });

  it('contains task title', () => {
    const taskTitle = 'Task title';
    const component = setUp({title: taskTitle});
    const title = component.find('Text');

    expect(title.children().text()).toBe(taskTitle);
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