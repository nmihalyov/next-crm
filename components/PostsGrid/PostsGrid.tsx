import { FC } from 'react';
import { Empty } from 'antd';
import type { Post } from '../../types/post';
import styles from './PostsGrid.module.scss';

import PostCard from '../_ui/PostCard/PostCard';

const PostsGrid: FC<{
  posts: Post[]
}> = ({ posts }) => {
  return (
    <div className={styles.grid}>
      {posts.length
        ? posts.map(post => <PostCard key={post.id} {...post} />)
        : <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="No posts yet"
          className={styles.empty} />
      }
    </div>
  );
};

export default PostsGrid;