import { useEffect } from 'react';
import type { NextPage } from 'next';

import type { Post } from '../../types/post';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';

import Loader from '../../components/_ui/Loader/Loader';
import PostForm from '../../components/PostForm/PostForm';
import PostsGrid from '../../components/PostsGrid/PostsGrid';

const PostsPage: NextPage = () => {
  const { createPost: createPostAction, fetchPosts } = useActions();
  const posts = useTypedSelector(state => state.posts);
  const isLoading = useTypedSelector(state => state.app.isLoading);

  useEffect(() => {
    if (!posts.length) {
      fetchPosts();
    }
  }, []);

  const createPost = (post: Post) => {
    createPostAction(post);
  }

  return (
    <div className="container">
      <h1>Posts</h1>
      <PostForm onApply={createPost} />
      {isLoading ?
        <Loader show /> :
        <PostsGrid posts={posts} />
      }
    </div>
  );
};

export default PostsPage;