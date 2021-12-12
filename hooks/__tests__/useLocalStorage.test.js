import useLocalStorage from '../useLocalStorage';

const HookWrapper = (props) => {
  const hook = props.hook();

  return <div hook={hook} />;
};

describe('useLocalStorage:', () => {
  const setUp = ({ key, initial }) => shallow(<HookWrapper hook={() => useLocalStorage(key, initial)} />);
  const getHook = component => component.find('div').prop('hook');

  it('returns current initial value', () => {
    const component = setUp('test', 'value');
    const [value] = getHook(component);

    expect(value).toBe('value');
  });
});