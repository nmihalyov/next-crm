import { Task, TasksActionTypes } from '../../types/task';

export const fetchTasks = () => ({
  type: TasksActionTypes.FETCH_TASKS
});

export const loadTasks = (tasks: Task[]) => ({
  type: TasksActionTypes.LOAD_TASKS,
  payload: tasks
});

export const addTask = (task: Task) => ({
  type: TasksActionTypes.ADD_TASK,
  payload: task
});

export const patchTask = (payload: {id: number, completed: boolean}) => ({
  type: TasksActionTypes.PATCH_TASK,
  payload
});

export const removeTask = (id: number) => ({
  type: TasksActionTypes.DELETE_TASK,
  payload: id
});