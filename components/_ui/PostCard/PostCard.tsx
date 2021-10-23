import Link from 'next/link';
import { Card, Typography } from 'antd';
import type { Post } from '../../../types/post';
import styles from './PostCard.module.scss';

const PostCard: React.FC<Post> = props => {
  const { title, body, id } = props;

  return (
    <Link href={`/posts/${id}`} passHref>
      <Card
        title={title}
        className={styles.card}
        hoverable>
        <Typography.Text>{body}</Typography.Text>
      </Card>
    </Link>
  );
};

export default PostCard;