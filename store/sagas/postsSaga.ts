import { put, takeEvery, call } from 'typed-redux-saga';

import { Post, PostsActionTypes } from '../../types/post';
import { loadPosts, setFetchingPosts } from '../actions/postsActions';

const fetchData = async (): Promise<Post[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const data = await res.json();

  return data;
};

const fetchPostsWorker = function *() {
  yield put(setFetchingPosts(true));
  const posts = yield* call(fetchData);

  yield put(loadPosts(posts));
  yield put(setFetchingPosts(false));
};

const fetchPostsWatcher = function *() {
  yield takeEvery(PostsActionTypes.FETCH_POSTS, fetchPostsWorker);
};

export default fetchPostsWatcher;