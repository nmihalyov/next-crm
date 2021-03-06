import { useEffect, useCallback, PropsWithChildren } from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import API from '../../utils/api';

import { PageHeader } from 'antd';
import type { Task } from '../../types/task';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';

import MainLayout from '../../layouts/MainLayout';
import Loader from '../../components/_ui/Loader/Loader';
import TaskForm from '../../components/TaskForm/TaskForm';
import TasksList from '../../components/TasksList/TasksList';

type TasksPageProps = {
  tasks: Task[]
};

const TasksPage: NextPage<TasksPageProps> = (props: PropsWithChildren<TasksPageProps>) => {
  const {
    addTask,
    removeTask: removeTaskAction,
    patchTask: patchTaskAction,
    loadTasks
  } = useActions();
  const { data: tasks, isFetching } = useTypedSelector(state => state.tasks);

  useEffect(() => {
    if (!tasks.length) {
      loadTasks(props.tasks);
    }
  }, []);

  const updateTasks = useCallback((task: Task): void => {
    addTask(task);
  }, []);

  const patchTask = (id: number, completed: boolean): void => {
    patchTaskAction({id, completed});
  };

  const removeTask = (id: number): void => {
    removeTaskAction(id);
  };

  return (
    <MainLayout title="Tasks">
      <PageHeader title={<span style={{fontSize: 28, fontWeight: 700}}>Tasks</span>} />
      <TaskForm onApply={updateTasks} />
      <TasksList
        tasks={tasks}
        onPatch={patchTask}
        onRemove={removeTask} />
      {isFetching && <Loader />}
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const tasks = await API.get<Task[]>('/todos?_limit=10');

  return {
    props: {
      tasks
    }
  };
};

export default TasksPage;