import React, { useState } from 'react';

import type { Task } from '../../types';

import Input from '../_ui/Input/Input'
import Button from '../_ui/Button/Button'

import styles from './ApplyForm.module.scss';

const ApplyForm: React.FC<{
  onApply(data: Task): void
}> = props => {
  const { onApply } = props;
  const defaultState = {
    userId: 1,
    id: 0,
    title: '',
    completed: false
  };

  const [formData, setFormData] = useState(defaultState);

  const updateFormData = (key: string, value: string): void => {
    setFormData({
      ...formData,
      [key]: value
    });
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

export default ApplyForm;