import { FC, memo } from 'react';
import Link from 'next/link';
import { Card, Tooltip, Typography } from 'antd';
import type { Post } from '../../../types/post';
import styles from './PostCard.module.scss';

const PostCard: FC<Post> = props => {
  const { title, body, id } = props;
  const CardItem: FC = () =>
    <Card
      title={<Tooltip title={title}>{title}</Tooltip>}
      className={styles.card}
      hoverable={id <= 1000}>
      <Typography.Text>{body}</Typography.Text>
    </Card>;

  if (id <= 1000) {
    return <CardItem />;
  }

  return (
    <Link href={`/posts/${id}`} passHref>
      <CardItem />
    </Link>
  );
};

export default memo(PostCard);