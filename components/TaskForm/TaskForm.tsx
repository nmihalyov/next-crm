import React, { useState } from 'react';

import type { Task } from '../../types/task';

import Input from '../_ui/Input/Input'
import Button from '../_ui/Button/Button'

import styles from './TaskForm.module.scss';

const TaskForm: React.FC<{
  onApply(data: Task): void
}> = props => {
  const { onApply } = props;
  const defaultState = {
    userId: 1,
    id: 0,
    title: '',
    completed: false
  };

  const [formData, setFormData] = useState<Task>(defaultState);

  const updateFormData = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
  
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const applyTask = (e: React.MouseEvent): void => {
    e.preventDefault();

    if (formData.title.trim()) {
      setFormData(defaultState);
      onApply({
        ...formData,
        id: Date.now()
      });
    }
  };

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <div className={styles.field}>
          <Input
            value={formData.title}
            onChange={updateFormData}
            label="Task name:"
            name="title"
            placeholder="Enter task name" />
        </div>
        <div className={styles.field}>
          <Button onClick={applyTask}>Apply new task</Button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;