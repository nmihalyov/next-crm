import { useEffect } from 'react';
import type { NextPage } from 'next';

import { Typography } from 'antd';
import type { Task } from '../../types/task';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';

import MainLayout from '../../layouts/MainLayout';
import Loader from '../../components/_ui/Loader/Loader';
import TaskForm from '../../components/TaskForm/TaskForm';
import TasksList from '../../components/TasksList/TasksList';

const TasksPage: NextPage = () => {
  const {
      addTask,
      removeTask: removeTaskAction,
      patchTask: patchTaskAction,
      fetchTasks
  } = useActions();
  const { data: tasks, isFetching, isFetched } = useTypedSelector(state => state.tasks); 

  useEffect(() => {
    if (!isFetched) {
      fetchTasks();
    }
  }, []);

  const updateTasks = (task: Task): void => {
    addTask(task);
  };

  const patchTask = (id: number, completed: boolean): void => {
    patchTaskAction({id, completed});
  };

  const removeTask = (id: number): void => {
    removeTaskAction(id);
  };

  return (
    <MainLayout title="Tasks">
      <Typography.Title level={2}>Tasks</Typography.Title>
      <TaskForm onApply={updateTasks} />
      {isFetching ?
        <Loader /> :
        <TasksList
          tasks={tasks}
          onPatch={patchTask}
          onRemove={removeTask} />
      }
    </MainLayout>
  );
};

export default TasksPage;