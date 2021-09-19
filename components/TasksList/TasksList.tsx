import React from 'react';

import type { Task } from '../../types';

import TaskCard from '../_ui/TaskCard/TaskCard';

import styles from './TasksList.module.scss';

const TasksList: React.FC<{
  tasks: Array<Task>,
  onPatch(id: number, completed: boolean): void,
  onRemove(id: number): void
}>= props => {
  const { tasks, onPatch, onRemove } = props;

  return (
    <div className={styles.list}>
      {tasks.length ? tasks.map((task: Task) => (
        <TaskCard
          key={task.id}
          onPatch={onPatch}
          onRemove={onRemove}
          {...task} />
      )) : <p className={styles.empty}>No tasks yet</p>}
    </div>
  );
};

export default TasksList;