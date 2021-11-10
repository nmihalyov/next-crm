import React from 'react';
import Link from 'next/link';
import { Card, Tooltip, Typography } from 'antd';
import type { Post } from '../../../types/post';
import styles from './PostCard.module.scss';

const PostCard: React.FC<Post> = props => {
  const { title: encodedTitle, body, id } = props;
  const title = decodeURI(encodedTitle);
  const CardItem: React.FC = () =>
    <Card
      title={<Tooltip title={title}>{title}</Tooltip>}
      className={styles.card}
      hoverable={id <= 1000}>
      <Typography.Text>{decodeURI(body)}</Typography.Text>
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

export default React.memo(PostCard);