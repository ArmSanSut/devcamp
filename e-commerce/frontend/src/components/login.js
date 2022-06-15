import { Button, Form, Input, Space } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { Component, useState } from 'react';

export default function Login() {
  const [state, setState] = useState({});
  const liff = window.liff;
  const [form] = Form.useForm();
  let navigate = useNavigate();

  

  const onFinish = async (values) => {
    // call from front to pass the data to back
    try {
      const result = await axios.post('/auth/token', {
        username: values.username,
        password: values.password,
      });
      console.log(result.data);
      localStorage.setItem('token', result.data.token);
      //navigate to component profile
      navigate('/homepage');
    } catch (e) {
      form.setFields([
        {
          name: 'username',
          errors: [e.response.data.error], //error from 401 unauthorized
        },
      ]);
      //alert('you must log in first');
      navigate('/register');
    }

  };
    const componentDidMount = async () => {
      await liff.init({ liffId: `1657206770-lndeRAdd` }).catch(err => { throw err });
      console.log(liff.isLoggedIn());
      if (liff.isLoggedIn()) {
        let getProfile = await liff.getProfile();
        setState({
          name: getProfile.displayName,
          userLineID: getProfile.userId,
          pictureUrl: getProfile.pictureUrl,
        });
        window.location.href = '/homepage';
      } else {
        liff.login();
      }
    }
  

  return (
    <div
      style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}
    >
      <Space>
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            name="username"
            label="Username"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button type="primary" htmlType="button" onClick={componentDidMount}>
                LINE LOGIN
              </Button>
            </Space>

          </Form.Item>
        </Form>
      </Space>
    </div>
  );
}


