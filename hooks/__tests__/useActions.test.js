import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import CombinedActions from '../../store/actions';
import useActions from '../useActions';

const HookWrapper = (props) => {
  const hook = props.hook();

  return <div hook={hook} />;
};

describe('useActions:', () => {
  it('returns binded action creators', () => {
    const mockStore = configureStore([]);
    const component = mount(
      <Provider store={mockStore({})}>
        <HookWrapper hook={() => useActions()} />
      </Provider>
    );
    const actions = component.find('div').prop('hook');

    expect(Object.keys(actions).sort()).toEqual(Object.keys(CombinedActions).sort());
  });
});