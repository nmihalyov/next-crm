import { createStore, applyMiddleware, compose, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import fetchTasksWatcher from './sagas/tasksSaga';
import fetchPostsWatcher from './sagas/postsSaga';

const defaultState = {};
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = (...middlewares: Middleware[]) => process.env.NODE_ENV !== 'production' ?
  composeWithDevTools(applyMiddleware(...middlewares)) :
  compose(applyMiddleware(...middlewares));

const store = createStore(
  rootReducer,
  defaultState,
  composeEnhancers(sagaMiddleware)
);

sagaMiddleware.run(fetchTasksWatcher);
sagaMiddleware.run(fetchPostsWatcher);

export default store;