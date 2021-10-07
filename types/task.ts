export type Task = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export enum TasksActionTypes {
  ADD_TASK = 'TASK/ADD_TASK',
  PATCH_TASK = 'TASK/PATCH_TASK',
  DELETE_TASK = 'TASK/DELETE_TASK',
  FETCH_TASKS = 'TASK/FETCH_TASKS',
  LOAD_TASKS = 'TASK/LOAD_TASK',
  SET_FETCHING = 'TASK/SET_FETCHING',
  SET_APPLYING = 'TASK/SET_APPLYING'
};

type AddTaskAction = {
  type: TasksActionTypes.ADD_TASK,
  payload: Task
};

type PatchTaskAction = {
  type: TasksActionTypes.PATCH_TASK,
  payload: {
    id: number,
    completed: boolean
  }
};

type DeleteTaskAction = {
  type: TasksActionTypes.DELETE_TASK,
  payload: number
};

type FetchTaskAction = {
  type: TasksActionTypes.FETCH_TASKS
};

type LoadTaskAction = {
  type: TasksActionTypes.LOAD_TASKS,
  payload: Task[]
};

type SetFetchingTasksAction = {
  type: TasksActionTypes.SET_FETCHING,
  payload: boolean
};

type SetApplyingTasksAction = {
  type: TasksActionTypes.SET_APPLYING,
  payload: boolean
};

export type TasksAction =
  AddTaskAction |
  PatchTaskAction |
  DeleteTaskAction |
  FetchTaskAction |
  LoadTaskAction |
  SetFetchingTasksAction |
  SetApplyingTasksAction;