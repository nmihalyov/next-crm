import { AppActionTypes, AppAction } from '../../types/app';

type AppState = {
  isLoading: boolean;
};

const defaultAppState: AppState = {
  isLoading: false
};

const appReducer = (state = defaultAppState, action: AppAction): AppState => {
  switch(action.type) {
    case AppActionTypes.SHOW_LOADER:
      return {
        ...state,
        isLoading: true
      };
    case AppActionTypes.HIDE_LOADER:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default appReducer;