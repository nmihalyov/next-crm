import { Post, PostsActionTypes, PostsAction } from '../../types/post';

type PostsState = {
  data: Post[];
  isApplying: boolean;
  isFetching: boolean;
  isFetched: boolean;
}

const defaultState: PostsState = {
  data: [],
  isApplying: false,
  isFetching: false,
  isFetched: false
};

const postsReducer = (state = defaultState, action: PostsAction): PostsState => {
  switch (action.type) {
    case PostsActionTypes.CREATE_POST:
      return {
        ...state,
        isApplying: false,
        data: [
          action.payload,
          ...state.data
        ]
      };
    case PostsActionTypes.LOAD_POSTS:
      return {
        ...state,
        isFetched: true,
        isFetching: false,
        data: [
          ...state.data,
          ...action.payload
        ]
      };
    case PostsActionTypes.SET_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      };
    case PostsActionTypes.SET_APPLYING:
      return {
        ...state,
        isApplying: action.payload
      };
    default:
      return state;
  }
};

export default postsReducer;