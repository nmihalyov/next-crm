import { Task, TasksActionTypes, TasksAction } from '../../types/task';

const tasksReducer = (state: Task[] = [], action: TasksAction): Task[] => {
  switch (action.type) {
    case TasksActionTypes.ADD_TASK:
      return [
        action.payload,
        ...state
      ];
    case TasksActionTypes.PATCH_TASK: {
      const { id, completed } = action.payload;

      return state.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed
          };
        }

        return task;
      });
    }
    case TasksActionTypes.DELETE_TASK: {
      const id = action.payload;

      return state.filter(task => task.id !== id);
    }
    case TasksActionTypes.LOAD_TASKS:
      return action.payload;
    default:
      return state;
  }
};

export default tasksReducer;