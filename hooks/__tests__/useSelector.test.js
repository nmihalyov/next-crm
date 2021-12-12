import { useSelector } from 'react-redux';
import useTypedSelector from '../useTypedSelector';

describe('useTypedSelector:', () => {
  it('returns same function as useSelector', () => {
    expect(useTypedSelector).toEqual(useSelector);
  });
});