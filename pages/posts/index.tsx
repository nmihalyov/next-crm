import { useEffect } from 'react';
import type { NextPage } from 'next';

import { Typography } from 'antd';
import type { Post } from '../../types/post';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';

import MainLayout from '../../layouts/MainLayout';
import Loader from '../../components/_ui/Loader/Loader';
import PostForm from '../../components/PostForm/PostForm';
import PostsGrid from '../../components/PostsGrid/PostsGrid';

const PostsPage: NextPage = () => {
  const { createPost: createPostAction, fetchPosts } = useActions();
  const { data: posts, isFetching, isFetched } = useTypedSelector(state => state.posts);

  useEffect(() => {
    if (!isFetched) {
      fetchPosts();
    }
  }, []);

  const createPost = (post: Post) => {
    createPostAction(post);
  }

  return (
    <MainLayout title="Posts">
      <Typography.Title level={2}>Posts</Typography.Title>
      <PostForm onApply={createPost} />
      {isFetching ?
        <Loader /> :
        <PostsGrid posts={posts} />
      }
    </MainLayout>
  );
};

export default PostsPage;