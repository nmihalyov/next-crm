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

export const setFetchingPosts = (isFetching: boolean) => ({
  type: PostsActionTypes.SET_FETCHING,
  payload: isFetching
});

export const setApplyingPost = (isApplying: boolean) => ({
  type: PostsActionTypes.SET_APPLYING,
  payload: isApplying
});