export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export enum PostsActionTypes {
  FETCH_POSTS = 'FETCH_POSTS',
  LOAD_POSTS = 'LOAD_POSTS',
  CREATE_POST = 'CREATE_POST'
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

export type PostsAction = CreatePostAction | LoadPostsAction | FetchPostsAction;