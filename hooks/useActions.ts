import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import CombinedActions from '../store/actions';

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(CombinedActions, dispatch);
};

export default useActions;