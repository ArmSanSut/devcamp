import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Button, Checkbox } from 'antd';

const FormComp = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const customValidate = (rule,value) => {
      console.log(value);
      if (value !== ""){
        return Promise.resolve();
      } else {
        return Promise.reject(new Error("Error 404"))
      }
      
      
  }

  return (
    <Form
      name="basic"
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 12,
      }}
      initialValues={{
        remember: true,
        // username: "Insert your name"
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed} 
      autoComplete="off"
      size='middle'
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
             required: true,
             message: 'Please input your username!',
            // validator: customValidate
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            // required: true,
            // message: 'Please input your password!',
            validator: customValidate
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};



export default FormComp;