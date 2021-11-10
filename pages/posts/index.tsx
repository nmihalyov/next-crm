import { useEffect, PropsWithChildren } from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import API from '../../utils/api';

import { PageHeader } from 'antd';
import type { Post } from '../../types/post';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';

import MainLayout from '../../layouts/MainLayout';
import Loader from '../../components/_ui/Loader/Loader';
import PostForm from '../../components/PostForm/PostForm';
import PostsGrid from '../../components/PostsGrid/PostsGrid';

type PostsPageProps = {
  posts: Post[]
};

const PostsPage: NextPage<PostsPageProps> = (props: PropsWithChildren<PostsPageProps>) => {
  const { createPost: createPostAction, loadPosts } = useActions();
  const { data: posts, isFetching } = useTypedSelector(state => state.posts);

  useEffect(() => {
    if (!posts.length) {
      loadPosts(props.posts);
    }
  }, []);

  const createPost = (post: Post) => {
    createPostAction(post);
  }

  return (
    <MainLayout title="Posts">
      <PageHeader title={<span style={{fontSize: 28, fontWeight: 700}}>Posts</span>} />
      <PostForm onApply={createPost} />
        <PostsGrid posts={posts} />
        {isFetching && <Loader />}
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await API.get<Post[]>('/posts?_limit=10');

  return {
    props: {
      posts
    }
  }
};

export default PostsPage;