import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
const FormComp = (props) => {
    const onFinish = (values)=> {
        console.log('Success:', values);
    }
    const onFinishFailed =(errorInfo)=> {
        console.log('Failed:', errorInfo);
    }
    return (
        <Form
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Firstname"
        name="first_name"
        rules={[
          {
            required: true,
            message: 'Please input your Firstname!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Lastname"
        name="last_name"
        rules={[
          {
            required: true,
            message: 'Please input your Lastname!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Phone Number"
        name="phone_number"
        rules={[
          {
            required: true,
            message: 'Please input your Lastname!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Lastname!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Address"
        name="address"
        rules={[
          {
            required: true,
            message: 'Please input your Lastname!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="District"
        name="district"
        rules={[
          {
            required: true,
            message: 'Please input your Lastname!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Sub_district"
        name="sub_district"
        rules={[
          {
            required: true,
            message: 'Please input your Lastname!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="City"
        name="city"
        rules={[
          {
            required: true,
            message: 'Please input your Lastname!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Post Code"
        name="post_code"
        rules={[
          {
            required: true,
            message: 'Please input your Lastname!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Identity ID"
        name="ident_id"
        rules={[
          {
            required: true,
            message: 'Please input your Lastname!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Company Name"
        name="company_name"
        rules={[
          {
            required: true,
            message: 'Please input your Lastname!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Company Address"
        name="company_address"
        rules={[
          {
            required: true,
            message: 'Please input your Lastname!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Duration"
        name="duration"
        rules={[
          {
            required: true,
            message: 'Please input your Lastname!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Working Position"
        name="position"
        rules={[
          {
            required: true,
            message: 'Please input your Lastname!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 12,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    );
}
export default FormComp;
