import { Card, Typography } from 'antd';
import type { Post } from '../../../types/post';
import styles from './PostCard.module.scss';

const PostCard: React.FC<Post> = props => {
  const { title, body } = props;

  return (
    <Card
      title={title}
      className={styles.card}
      hoverable>
      <Typography.Text>{body}</Typography.Text>
    </Card>
  );
};

export default PostCard;