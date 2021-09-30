import React from 'react';

import type { Post } from '../../../types/post';
import styles from './PostCard.module.scss';

const PostCard: React.FC<Post> = props => {
  const { title, body } = props;

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.body}>{body}</p>
    </div>
  );
};

export default PostCard;