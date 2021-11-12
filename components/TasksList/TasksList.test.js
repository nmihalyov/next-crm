import TasksList from './TasksList';

describe('TasksList:', () => {
  const setUp = props => shallow(<TasksList {...props} />);
  const tasks = [{userId: 1, id: 1, title: 'Task title', completed: true}];

  it('renders component if any tasks', () => {
    const component = setUp(tasks);

    expect(component).toMatchSnapshot();
  });

  it('renders empty element if no tasks', () => {
    const component = setUp();
    const empty = component.find('Empty');

    expect(empty).toHaveLength(1);
  });
});