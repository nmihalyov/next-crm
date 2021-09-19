import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import type { Task } from '../../types';

import ApplyForm from '../../components/ApplyForm/ApplyForm';
import TasksList from '../../components/TasksList/TasksList';

const TasksPage: NextPage<{
  tasks: Array<Task>
}> = props => {
  const [tasks, setTasks] = useState([] as Task[]);

  const updateTasks = (task: Task): void => {
    setTasks(prev => [task, ...prev]);
  };

  const patchTask = (id: number, completed: boolean): void => {
    setTasks(prev => prev.map(task => task.id === id ? {...task, completed} : task));
  };

  const removeTask = (id: number): void => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  useEffect(() => {
    const localTasks = localStorage.getItem('tasks');
    const tasks = localTasks ? JSON.parse(localTasks) as Task[] : props.tasks;
  
    setTasks(tasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (<>
    <Head>
      <title>Tasks | Next TS</title>
    </Head>
    <ApplyForm onApply={updateTasks} />
    <TasksList
      tasks={tasks}
      onPatch={patchTask}
      onRemove={removeTask} />
  </>);
};

export async function getStaticProps() {
  const tasksQuery = await fetch('https://jsonplaceholder.typicode.com/todos?_start=1&_limit=10');
  const tasks = await tasksQuery.json();

  return {props: {tasks}};
};

export default TasksPage;