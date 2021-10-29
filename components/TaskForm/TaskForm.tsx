import React from 'react';
import type { Task } from '../../types/task';
import useActions from '../../hooks/useActions';
import useInput from '../../hooks/useInput';
import useTypedSelector from '../../hooks/useTypedSelector';
import { Form, Input, Button } from 'antd';

const TaskForm: React.FC<{
  onApply(data: Task): void
}> = props => {
  const { onApply } = props;
  const input = useInput();
  const [form] = Form.useForm();
  const isApplying = useTypedSelector(state => state.tasks.isApplying);
  const { setApplyingTask } = useActions();

  const applyTask = (): void => {
    setApplyingTask(true);
    onApply({
      userId: 1,
      id: Date.now(),
      title: input.value,
      completed: false
    });
    input.clear();
    form.resetFields();
  };

  return (
    <Form
      autoComplete="off"
      form={form}
      labelCol={{span: 3}}
      onFinish={applyTask}>

      <Form.Item
        label="Task name"
        name="title"
        rules={[{required: true, message: 'Please, enter task title'}]}>
        <Input {...input.bind} name="title" allowClear />
      </Form.Item>

      <Form.Item wrapperCol={{offset: 3}}>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          loading={isApplying}>
          Apply task
        </Button>
      </Form.Item>

    </Form>
  );
};

export default React.memo(TaskForm);