import { FC, memo } from 'react';
import type { Task } from '../../../types/task';
import { Modal, Row, Button, Typography, Checkbox } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import styles from './TaskCard.module.scss';

const TaskCard: FC<Task & {
  onPatch(id: number, completed: boolean): void,
  onRemove(id: number): void,
}> = props => {
  const { id, title, completed, onPatch, onRemove } = props;
  const onChange = () => onPatch(id, !completed);
  const removeHandler = (): void => {
    Modal.confirm({
      title: 'Are you sure you want to delete this task?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        onRemove(id);
      }
    });
  };

  return (
    <Row className={styles.card} justify="space-between" align="middle">
      <Checkbox checked={completed} onChange={onChange}>
        <Typography.Text className={`${styles.title} ${completed ? styles.titleDone : ''}`}>{title}</Typography.Text>
      </Checkbox>
      <Button
        danger
        ghost
        type="primary"
        icon={<DeleteOutlined />}
        onClick={removeHandler} />
    </Row>
  );
};

export default memo(TaskCard);