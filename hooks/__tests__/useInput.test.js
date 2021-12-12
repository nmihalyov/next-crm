import useInput from '../useInput';

const HookWrapper = (props) => {
  const hook = props.hook();

  return <input hook={hook} {...hook.bind} />;
};

describe('useInput:', () => {
  const TEXT = 'Lorem ipsum';
  const setUp = initial => shallow(<HookWrapper hook={() => useInput(initial)} />);
  const getInput = component => component.find('input');

  it('sets initial value', () => {
    const component = setUp(TEXT);

    expect(getInput(component).prop('value')).toBe(TEXT);
  });

  it('binds value and change handler to input element', () => {
    const component = setUp();

    getInput(component).simulate('change', {target: {value: TEXT}});
    expect(getInput(component).prop('value')).toBe(TEXT);
  });

  it('returns correct value', () => {
    const component = setUp(TEXT);
    const value = getInput(component).prop('hook').value;

    expect(value).toBe(TEXT);
  });

  it('clears input', () => {
    const component = setUp(TEXT);
    getInput(component).prop('hook').clear();
    const value = getInput(component).prop('hook').value;

    expect(value).toBe('');
  });
});