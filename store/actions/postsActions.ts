import { Post, PostsActionTypes } from '../../types/post';

export const fetchPosts = () => ({
  type: PostsActionTypes.FETCH_POSTS
});

export const loadPosts = (posts: Post[]) => ({
  type: PostsActionTypes.LOAD_POSTS,
  payload: posts
});

export const createPost = (post: Post) => ({
  type: PostsActionTypes.CREATE_POST,
  payload: post
});