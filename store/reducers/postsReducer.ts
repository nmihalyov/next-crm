import { Post, PostsActionTypes, PostsAction } from '../../types/post';

const postsReducer = (state: Post[] = [], action: PostsAction): Post[] => {
  switch (action.type) {
    case PostsActionTypes.CREATE_POST:
      return [
        action.payload,
        ...state
      ];
    case PostsActionTypes.LOAD_POSTS:
      return action.payload;
    default:
      return state;
  }
};

export default postsReducer;