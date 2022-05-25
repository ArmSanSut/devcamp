import { Button, Form, Input, Space } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
 const [form] = Form.useForm();
 let navigate = useNavigate();
 const onFinish = async (values) => {
     console.log(values);
   // call backend here
   try {
    const result = await axios.post('/api/users', {
      username: values.username,
      password: values.password,
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
    });
    // localStorage.setItem('token', result.data.token);

    //navigate to component profile
    navigate('/login');
  } catch (e) {
    form.setFields([
      {
        name: 'username',
        errors: [e.response.data.error], //error from 401 unauthorized
      },
    ]);
  }
 };

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
         <Form.Item
           name="first_name"
           label="Firstname"
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
           name="last_name"
           label="Lastname"
           labelCol={{ span: 8 }}
           wrapperCol={{ span: 16 }}
         >
             <Input />
         </Form.Item>
         <Form.Item
           name="email"
           label="Email"
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
         <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
           <Button type="primary" htmlType="submit">
             Submit
           </Button>
         </Form.Item>
       </Form>
     </Space>
   </div>
 );
}


