import tasksReducer from '../tasksReducer';
import { TasksActionTypes } from '../../../types/task';

describe('Tasks reducer:', () => {
  const tasks = [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false
    },
    {
      userId: 1,
      id: 3,
      title: 'fugiat veniam minus',
      completed: false
    },
    {
      userId: 1,
      id: 4,
      title: 'et porro tempora',
      completed: true
    }
  ];
  const task1 = {
    userId: 1,
    id: 23423,
    title: 'Some task',
    completed: false
  };
  const task2 = {
    userId: 1,
    id: 23463,
    title: 'Another task',
    completed: false
  };
  let tasksState;

  beforeEach(() => {
    tasksState = {
      data: tasks,
      isApplying: false,
      isFetching: false,
      isFetched: true
    };
  });

  it('returns default state if non-valid action provided', () => {
    const state = tasksReducer(undefined, {type: ''});

    expect(state).toEqual({
      data: [],
      isApplying: false,
      isFetching: false,
      isFetched: false
    });
  });

  it('creates new task', () => {
    const action = {
      type: TasksActionTypes.ADD_TASK,
      payload: task1
    };
    const state = tasksReducer(tasksState, action);

    expect(state).toEqual({
      ...tasksState,
      data: [
        task1,
        ...tasksState.data
      ]
    });
  });

  it('patches task', () => {
    const action = {
      type: TasksActionTypes.PATCH_TASK,
      payload: {
        id: tasks[0].id,
        completed: !tasks[0].completed
      }
    };
    const state = tasksReducer(tasksState, action);
    const expectedData = Array.from(tasks);
    expectedData[0].completed = true;

    expect(state).toEqual({
      ...tasksState,
      data: expectedData
    });
  });

  it('removes task', () => {
    const action = {
      type: TasksActionTypes.DELETE_TASK,
      payload: 1
    };
    const state = tasksReducer(tasksState, action);
    const expectedData = Array.from(tasks);
    expectedData.splice(0, 1);

    expect(state).toEqual({
      ...tasksState,
      data: expectedData
    });
  });

  it('loads tasks', () => {
    const payload = [task1, task2];
    const action = {
      type: TasksActionTypes.LOAD_TASKS,
      payload
    };
    const state = tasksReducer(tasksState, action);

    expect(state).toEqual({
      ...tasksState,
      data: [
        ...tasksState.data,
        ...payload
      ]
    });
  });

  it('sets fetching state', () => {
    const isFetching = true;
    const action = {
      type: TasksActionTypes.SET_FETCHING,
      payload: isFetching
    };
    const state = tasksReducer(tasksState, action);

    expect(state).toEqual({
      ...tasksState,
      isFetching
    });
  });

  it('sets applying state', () => {
    const isApplying = true;
    const action = {
      type: TasksActionTypes.SET_APPLYING,
      payload: isApplying
    };
    const state = tasksReducer(tasksState, action);

    expect(state).toEqual({
      ...tasksState,
      isApplying
    });
  });
});