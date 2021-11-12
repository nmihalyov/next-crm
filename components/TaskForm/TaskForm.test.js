import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import TaskForm from './TaskForm';

describe('TaskForm:', () => {
  const onApply = jest.fn();
  const titleValue = 'Title';
  let component;
  let form;
  let button;
  let input;
  let store;

  beforeAll(() => {
    const mockStore = configureStore([]);
    jest.spyOn(Date, 'now').mockImplementation(() => 1487076708000);

    store = mockStore({
      tasks: {
        data: [],
        isApplying: false,
        isFetching: false,
        isFetched: true
      }
    });
  });

  beforeEach(() => {
    onApply.mockRestore();
    component = mount(
      <Provider store={store}>
        <TaskForm onApply={onApply} />
      </Provider>
    );
    form = component.find('form');
    button = component.find('Button');
    input = component.find('input');
  });

  it('renders component', () => {
    expect(form).toHaveLength(1);
  });

  // This is a dummy hack to run test after timeout, otherwise it fails (supposed to be two different tests)
  // If you have a better solution, please send pull-request or contact me directly
  it('calls onApply with correct arguments and doesn\'t call without at least one input not filled', done => {
    button.simulate('submit');

    setTimeout(() => {
      expect(onApply).not.toHaveBeenCalled();

      input.simulate('change', {target: {value: titleValue}});
      button.simulate('submit');

      setTimeout(() => {
        expect(onApply).toHaveBeenCalledWith({userId: 1, title: titleValue, completed: false, id: Date.now()});
        expect(input.getElement().props.value).toBe('');
        done();
      });
    });
  });
});