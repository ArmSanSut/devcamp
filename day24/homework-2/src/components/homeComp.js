import React from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import AuthContext from './authContext';
import { Modal, Layout, Menu, Input, Form, Button } from 'antd';
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const HomeComp = () => {
    const context = useContext(AuthContext);
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    }
    if (context) {
        window.location.href = '/dashboard';
    }
    const handleOk = async (values) => {
        setIsModalVisible(false);
        try {
            console.log(values);
                const result = await axios.post('/api/auth/token', {
                  username: values.username,
                  password: values.password,

                });
                console.log(result);
                localStorage.setItem('token', result.data.token);
                localStorage.setItem('username', result.data.username);
                navigate('/dashboard')
                alert("log-in succesfull")
                
        } catch (e) {
            form.setFields([
                {
                    name: 'username',
                    errors: [e.response.data.error],
                },
            ]);
            navigate('/')
            console.log(e);
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Layout>
                <Header
                    style={{
                        position: 'fixed',
                        zIndex: 1,
                        width: '100%',
                    }}
                >
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                    >
                        <Menu.Item
                            key="login"
                            onClick={showModal}
                        >
                            Log-In
                        </Menu.Item>
                        <Menu.Item >
                            Dashboard
                        </Menu.Item>
                        <Modal title="Basic Modal" visible={isModalVisible} onCancel={handleCancel} footer= {null}>
                            <Form
                                onFinish={handleOk}
                            >
                                <Form.Item
                                    name="username"
                                    label="Username"
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    label="Password"
                                >
                                    <Input.Password />
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
                        </Modal>
                    </Menu>



                </Header>
                <Content
                    className="site-layout"
                    style={{
                        padding: '0 50px',
                        marginTop: 64,
                    }}
                >

                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 380,
                            textAlign: 'center'
                        }}
                    >
                        Content will display here if you LOG-IN
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </>
    )


};

export default HomeComp;