import { useCallback } from 'react';
import type { Task } from '../../types/task';
import { Empty } from 'antd';

import TaskCard from '../_ui/TaskCard/TaskCard';

const TasksList: React.FC<{
  tasks: Array<Task>,
  onPatch(id: number, completed: boolean): void,
  onRemove(id: number): void
}>= props => {
  const { tasks, onPatch, onRemove } = props;

  const memoizedOnPatch = useCallback(onPatch, []);
  const memoizedOnRemove = useCallback(onRemove, []);

  return (
    <div>
      {tasks.length ? tasks.map(task =>
        <TaskCard
          key={task.id}
          onPatch={memoizedOnPatch}
          onRemove={memoizedOnRemove}
          {...task} />
      ) : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No tasks yet" />}
    </div>
  );
};

export default TasksList;