import { Form, Input, Select, Button } from "antd";

const { Option } = Select;

const UserEditForm = ({ user, onUpdate }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onUpdate(values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={user}
      className="max-w-2xl"
    >
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[{ required: true, message: "Please input first name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[{ required: true, message: "Please input last name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="User Type"
        name="userType"
        rules={[{ required: true, message: "Please select user type!" }]}
      >
        <Select>
          <Option value="Admin">Admin</Option>
          <Option value="System">System</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Department"
        name="department"
        rules={[{ required: true, message: "Please select department!" }]}
      >
        <Select>
          <Option value="Frontend">Frontend</Option>
          <Option value="Backend">Backend</Option>
          <Option value="QA">QA</Option>
          <Option value="Marketing">Marketing</Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Update User
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserEditForm;
