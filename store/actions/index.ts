import * as AppActions from './appActions';
import * as PostsActions from './postsActions';
import * as TasksActions from './tasksActions';

const CombinedActions = {
  ...AppActions,
  ...PostsActions,
  ...TasksActions
};

export default CombinedActions;