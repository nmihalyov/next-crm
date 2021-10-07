import * as PostsActions from './postsActions';
import * as TasksActions from './tasksActions';

const CombinedActions = {
  ...PostsActions,
  ...TasksActions
};

export default CombinedActions;