export type Task = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export enum TasksActionTypes {
  ADD_TASK = 'ADD_TASK',
  PATCH_TASK = 'PATCH_TASK',
  DELETE_TASK = 'DELETE_TASK',
  FETCH_TASKS = 'FETCH_TASKS',
  LOAD_TASKS = 'LOAD_TASK'
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

export type TasksAction = AddTaskAction | PatchTaskAction | DeleteTaskAction | FetchTaskAction | LoadTaskAction;