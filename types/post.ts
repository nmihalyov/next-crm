/* eslint-disable no-unused-vars */
export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export enum PostsActionTypes {
  FETCH_POSTS = 'POST/FETCH_POSTS',
  LOAD_POSTS = 'POST/LOAD_POSTS',
  CREATE_POST = 'POST/CREATE_POST',
  SET_FETCHING = 'POST/SET_FETCHING',
  SET_APPLYING = 'POST/SET_APPLYING'
};

type CreatePostAction = {
  type: PostsActionTypes.CREATE_POST,
  payload: Post
};

type FetchPostsAction = {
  type: PostsActionTypes.FETCH_POSTS
};

type LoadPostsAction = {
  type: PostsActionTypes.LOAD_POSTS,
  payload: Post[]
};

type SetFetchingPostsAction = {
  type: PostsActionTypes.SET_FETCHING,
  payload: boolean
};

type SetApplyingPostsAction = {
  type: PostsActionTypes.SET_APPLYING,
  payload: boolean
};

export type PostsAction =
  CreatePostAction |
  LoadPostsAction |
  FetchPostsAction |
  SetFetchingPostsAction |
  SetApplyingPostsAction;