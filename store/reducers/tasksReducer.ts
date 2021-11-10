import { Task, TasksActionTypes, TasksAction } from '../../types/task';

type TasksState = {
  data: Task[];
  isApplying: boolean;
  isFetching: boolean;
  isFetched: boolean;
}

const defaultState: TasksState = {
  data: [],
  isApplying: false,
  isFetching: false,
  isFetched: false
};

const tasksReducer = (state = defaultState, action: TasksAction): TasksState => {
  switch (action.type) {
    case TasksActionTypes.ADD_TASK:
      return {
        ...state,
        isApplying: false,
        data: [
          action.payload,
          ...state.data
        ]
      };
    case TasksActionTypes.PATCH_TASK: {
      const { id, completed } = action.payload;

      return {
        ...state,
        data: state.data.map(task => {
          if (task.id === id) {
            return {
              ...task,
              completed
            };
          }

          return task;
        })
      };
    }
    case TasksActionTypes.DELETE_TASK: {
      const id = action.payload;

      return {
        ...state,
        data: state.data.filter(task => task.id !== id)
      };
    }
    case TasksActionTypes.LOAD_TASKS:
      return {
        ...state,
        isFetched: true,
        isFetching: false,
        data: [
          ...state.data,
          ...action.payload
        ]
      };
    case TasksActionTypes.SET_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      };
    case TasksActionTypes.SET_APPLYING:
      return {
        ...state,
        isApplying: action.payload
      };
    default:
      return state;
  }
};

export default tasksReducer;