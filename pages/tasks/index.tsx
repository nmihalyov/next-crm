import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import type { Task } from '../../types/task';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';

import Loader from '../../components/_ui/Loader/Loader';
import TaskForm from '../../components/TaskForm/TaskForm';
import TasksList from '../../components/TasksList/TasksList';

const TasksPage: NextPage = () => {
  const { addTask, removeTask: removeTaskAction, patchTask: patchTaskAction, fetchTasks } = useActions();
  const tasks = useTypedSelector(state => state.tasks); 
  const isLoading = useTypedSelector(state => state.app.isLoading); 

  useEffect(() => {
    if (!tasks.length) {
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
    <div className="container">
      <Head>
        <title>Tasks | Next TS</title>
      </Head>
      <h1>Tasks</h1>
      <TaskForm onApply={updateTasks} />
      {isLoading ?
        <Loader show /> :
        <TasksList
          tasks={tasks}
          onPatch={patchTask}
          onRemove={removeTask} />
      }
    </div>
  );
};

export default TasksPage;