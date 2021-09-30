import { combineReducers } from 'redux';

import appReducer from './appReducer';
import tasksReducer from './tasksReducer';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
  app: appReducer,
  tasks: tasksReducer,
  posts: postsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;