import { Form, Input, Button } from 'antd';
import type { Post } from '../../types/post';
import useInput from '../../hooks/useInput';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';

const PostForm: React.FC<{
  onApply(data: Post): void
}> = props => {
  const { onApply } = props;
  const titleInput = useInput();
  const bodyInput = useInput();
  const { setApplyingPost } = useActions();
  const isApplying = useTypedSelector(state => state.posts.isApplying);
  const [form] = Form.useForm();

  const applyPost = (): void => {
    setApplyingPost(true);
    onApply({
      userId: 1,
      title: titleInput.value,
      body: bodyInput.value,
      id: Date.now()
    });

    titleInput.clear();
    bodyInput.clear();
    form.resetFields();
  };

  return (
    <Form
      autoComplete="off"
      form={form}
      labelCol={{span: 2}}
      onFinish={applyPost}>

      <Form.Item
        label="Title"
        name="title"
        rules={[{required: true, message: 'Please, enter post title'}]}>
        <Input {...titleInput.bind} name="title" allowClear />
      </Form.Item>

      <Form.Item
        label="Body"
        name="body"
        rules={[{required: true, message: 'Please, enter post text'}]}>
        <Input.TextArea
          {...bodyInput.bind}
          rows={4}
          style={{resize: "none"}}
          name="body"
          allowClear />
      </Form.Item>

      <Form.Item wrapperCol={{offset: 2}}>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          loading={isApplying}>
          Apply post
        </Button>
      </Form.Item>

    </Form>
  );
};

export default PostForm;