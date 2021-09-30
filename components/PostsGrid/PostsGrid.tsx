import React from 'react';

import type { Post } from '../../types/post';
import styles from './PostsGrid.module.scss';

import PostCard from '../_ui/PostCard/PostCard';

const PostsGrid: React.FC<{
  posts: Post[]
}>= ({ posts }) => {
  return (
    <div className={styles.grid}>
      {posts.length ? 
        posts.map(post => <PostCard key={post.id} {...post} />) :
        <p className={styles.empty}>No posts yet</p>
      }
    </div>
  );
};

export default PostsGrid;