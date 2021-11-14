import postsReducer from '../postsReducer';
import { PostsActionTypes } from '../../../types/post';

describe('Posts reducer:', () => {
  const posts = [
    {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
    },
    {
      userId: 1,
      id: 3,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
    }
  ];
  const post1 = {
    userId: 1,
    id: 423423,
    title: 'Post title',
    body: 'Post body text'
  };
  const post2 = {
    userId: 1,
    id: 423458,
    title: 'Another post title',
    body: 'Another post body text'
  };
  let postsState;

  beforeEach(() => {
    postsState = {
      data: posts,
      isApplying: false,
      isFetching: false,
      isFetched: true
    };
  });

  it('returns default state if non-valid action provided', () => {
    const state = postsReducer(undefined, {type: ''});

    expect(state).toEqual({
      data: [],
      isApplying: false,
      isFetching: false,
      isFetched: false
    });
  });

  it('creates new post', () => {
    const action = {
      type: PostsActionTypes.CREATE_POST,
      payload: post1
    };
    const state = postsReducer(postsState, action);

    expect(state).toEqual({
      ...postsState,
      data: [
        post1,
        ...postsState.data
      ]
    });
  });

  it('loads posts', () => {
    const payload = [post1, post2];
    const action = {
      type: PostsActionTypes.LOAD_POSTS,
      payload
    };
    const state = postsReducer(postsState, action);

    expect(state).toEqual({
      ...postsState,
      data: [
        ...postsState.data,
        ...payload
      ]
    });
  });

  it('sets fetching state', () => {
    const isFetching = true;
    const action = {
      type: PostsActionTypes.SET_FETCHING,
      payload: isFetching
    };
    const state = postsReducer(postsState, action);

    expect(state).toEqual({
      ...postsState,
      isFetching
    });
  });

  it('sets applying state', () => {
    const isApplying = true;
    const action = {
      type: PostsActionTypes.SET_APPLYING,
      payload: isApplying
    };
    const state = postsReducer(postsState, action);

    expect(state).toEqual({
      ...postsState,
      isApplying
    });
  });
});