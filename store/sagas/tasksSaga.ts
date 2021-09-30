import { put, takeEvery, call } from 'typed-redux-saga';

import { Task, TasksActionTypes } from '../../types/task';
import { loadTasks } from '../actions/tasksActions';
import { showLoader, hideLoader } from '../actions/appActions';

const fetchData = async (): Promise<Task[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
  const data = await res.json();

  return data;
};

const fetchTasksWorker = function *() {
  yield put(showLoader());
  const tasks = yield* call(fetchData);
  
  yield put(loadTasks(tasks));
  yield put(hideLoader());
};

const fetchTasksWatcher = function *() {
  yield takeEvery(TasksActionTypes.FETCH_TASKS, fetchTasksWorker);
};

export default fetchTasksWatcher;