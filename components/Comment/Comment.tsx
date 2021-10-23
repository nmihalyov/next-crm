import { Comment as CommentComponent, Avatar, Typography } from 'antd';

import type { Comment as CommentType } from '../../types/comment';

const Comment: React.FC<CommentType> = props => {
  const { name, body } = props;

  return (
    <CommentComponent
      author={<a>{name}</a>}
      avatar={<Avatar>{name.substr(0, 1).toUpperCase()}</Avatar>}
      content={<Typography.Paragraph>{body}</Typography.Paragraph>} />
  );
};

export default Comment;