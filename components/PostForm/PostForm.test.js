import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import PostForm from './PostForm';

describe('PostForm:', () => {
  const titleValue = 'Title';
  const bodyValue = 'Post body text';
  const onApply = jest.fn();
  let component;
  let button;
  let titleInput;
  let bodyInput;
  let store;

  beforeAll(() => {
    const mockStore = configureStore([]);
    jest.spyOn(Date, 'now').mockImplementation(() => 1487076708000);

    store = mockStore({
      posts: {
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
        <PostForm onApply={onApply} />
      </Provider>
    );
    button = component.find('Button');
    titleInput = component.find('input');
    bodyInput = component.find('textarea');
  });

  it('renders PostForm', () => {
    expect(component).toMatchSnapshot();
  });

  // This is a dummy hack to run test after timeout, otherwise it fails (supposed to be two different tests)
  // If you have a better solution, please send pull-request or contact me directly
  it('calls onApply with correct arguments and doesn\'t call without at least one input not filled', done => {
    button.simulate('submit');

    setTimeout(() => {
      expect(onApply).not.toHaveBeenCalled();

      titleInput.simulate('change', {target: {value: titleValue}});
      bodyInput.simulate('change', {target: {value: bodyValue}});
      button.simulate('submit');

      setTimeout(() => {
        expect(onApply).toHaveBeenCalledWith({userId: 1, title: titleValue, body: bodyValue, id: Date.now()});
        expect(titleInput.getElement().props.value).toBe('');
        expect(bodyInput.getElement().props.value).toBe('');
        done();
      });
    });
  });
});