import { combineReducers } from 'redux';

import tasksReducer from './tasksReducer';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  posts: postsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;