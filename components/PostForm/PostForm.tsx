import React, { useState } from 'react';

import type { Post } from '../../types/post';
import styles from './PostForm.module.scss';

import Input from '../_ui/Input/Input';
import Button from '../_ui/Button/Button';

const PostForm: React.FC<{
  onApply(data: Post): void
}> = props => {
  const { onApply } = props;
  const defaultState: Post = {
    userId: 1,
    id: 0,
    title: '',
    body: ''
  };

  const [formData, setFormData] = useState<Post>(defaultState);

  const updateFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const applyPost = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (formData.title.trim() && formData.body.trim()) {
      onApply({
        ...formData,
        id: Date.now()
      })
      setFormData(defaultState);
    }
  };

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <Input
          value={formData.title}
          label="Title:"
          name="title"
          placeholder="Enter post title"
          onChange={updateFormData} />
      </div>
      <div className={styles.row}>
        <Input
          value={formData.body}
          label="Post:"
          name="body"
          placeholder="Enter post text"
          onChange={updateFormData} />
      </div>
      <div className={styles.row}>
        <Button onClick={applyPost}>Apply post</Button>
      </div>
    </form>
  );
};

export default PostForm;