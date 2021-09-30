import React from 'react';

import type { Task } from '../../../types/task';

import Checkbox from '../Checkbox/Checkbox';

import styles from './TaskCard.module.scss';

const TaskCard: React.FC<Task & {
  onPatch(id: number, completed: boolean): void,
  onRemove(id: number): void,
}> = props => {
  const { id, title, completed, onPatch, onRemove } = props;
  const removeHandler = (id: number): void => {
    if (confirm('Are you sure you want to delete this task?')) {
      onRemove(id);
    }
  }

  return (
    <div className={styles.card}>
      <Checkbox name={id} checked={completed} onChange={() => onPatch(id, !completed)}>
        <span className={`${styles.title} ${completed ? styles.titleDone : ''}`}>{title}</span>
      </Checkbox>
      <button className={styles.remove} onClick={() => removeHandler(id)}>&times;</button>
    </div>
  );
};

export default TaskCard;