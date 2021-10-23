import { useState, useEffect } from 'react';
import type { GetServerSideProps, NextPage, GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { PageHeader, Typography, Divider, message } from 'antd';
import API from '../../utils/api';

import type { Comment } from '../../types/comment';
import type { Post } from '../../types/post';
import type { User } from '../../types/user';

import MainLayout from '../../layouts/MainLayout'
import Loader from '../../components/_ui/Loader/Loader';
import CommentComponent from '../../components/Comment/Comment';

const PostDetailPage: NextPage<{
  post: Post,
  user: User
}> = props => {
  const { post, user } = props;
  const [comments, setComments] = useState<Comment[] | null>(null);
  const [commentsLoading, setCommentsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setCommentsLoading(true);

    API.get<Comment[]>(`/posts/${router.query.id}/comments`)
    .then(res => {
      setComments(res);
    })
    .catch((error: string) => {
      const errorMessage = 'Error while load comments: ' + error;
      message.error(errorMessage, 7)
    })
    .finally(() => setCommentsLoading(false));
  }, []);

  return (
    <MainLayout title={post.title}>
      <PageHeader
        onBack={router.back}
        title={<span style={{fontSize: 28, fontWeight: 700}}>{post.title}</span>}
        subTitle={`by ${user.username} <${user.email}>`} />

      <Typography.Paragraph>{post.body}</Typography.Paragraph>

      {commentsLoading && <Loader />}
      {comments?.length ? <>
        <Divider style={{marginTop: 50}} orientation="left">Comments</Divider>
        {comments.map(el => <CommentComponent key={el.id} {...el} />)}
      </> : null}
    </MainLayout>
  );
};

interface PostPageContext extends GetServerSidePropsContext {
  query: {
    id?: string
  }
};

export const getServerSideProps: GetServerSideProps = async (ctx: PostPageContext) => {
  const post = await API.get<Post>(`/posts/${ctx.query.id}`);
  const user = await API.get<User>(`/users/${post.userId}`);

  return {
    props: {
      post,
      user
    }
  };
}

export default PostDetailPage;