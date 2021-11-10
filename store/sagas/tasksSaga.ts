import { put, takeEvery, call } from 'typed-redux-saga';

import { Task, TasksActionTypes } from '../../types/task';
import { loadTasks, setFetchingTasks } from '../actions/tasksActions';

const fetchData = async (): Promise<Task[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
  const data = await res.json();

  return data;
};

const fetchTasksWorker = function *() {
  yield put(setFetchingTasks(true));
  const tasks = yield* call(fetchData);

  yield put(loadTasks(tasks));
  yield put(setFetchingTasks(false));
};

const fetchTasksWatcher = function *() {
  yield takeEvery(TasksActionTypes.FETCH_TASKS, fetchTasksWorker);
};

export default fetchTasksWatcher;