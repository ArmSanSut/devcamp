import { Form, Input, Button, Layout, Menu, Badge } from 'antd';
import { CheckSquareOutlined } from '@ant-design/icons';
import React from 'react';
import 'antd/dist/antd.css';
import { changeLastname, changeName } from './userProfile';
import { useDispatch, useSelector } from 'react-redux';
import  addCartReducer  from './addCart';
import { useState } from 'react';

import store from './store';

const { Header, Content, Footer } = Layout;

function ProfileUser() {
    const display = useSelector((state) => state.profile);
    const addProduct = useSelector(state => state.product);
    console.log(addProduct);
    const dispatch = useDispatch();

    const onFinish = (values) => {
        console.log('Success:', values);
        dispatch(changeName(values.firstname));
        dispatch(changeLastname(values.lastname));

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (

        <div>
            <Layout>
                <Header
                    style={{
                        position: 'fixed',
                        zIndex: 1,
                        width: '100%',
                    }}
                >
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}

                    >
                        <Menu.Item>
                            Product List
                        </Menu.Item>
                        <Menu.Item>
                            Cart
                        </Menu.Item>
                        <Menu.Item>
                            Profile
                        </Menu.Item>

                        <Menu.Item
                            style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                            }}
                        >
                            Hello {display.firstname} {display.lastname}

                            <Badge count= {addProduct.count}>
                                <CheckSquareOutlined
                                    style={{
                                        margin: 20,
                                        fontSize: 25
                                    }}
                                />
                            </Badge>
                        </Menu.Item>
                    </Menu>
                </Header>

                <Content
                    className="site-layout"
                    style={{
                        padding: '0 50px',
                        marginTop: 64,
                        minHeight: 600
                    }}
                >
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
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
                        style={{
                            margin: 75,
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Form.Item
                            label="Firstname"
                            name="firstname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your firstname!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="lastname"
                            name="lastname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your lastname!',
                                },
                            ]}
                        >
                            <Input />
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
                </Content>

                <Footer
                    style={{
                        textAlign: 'center',
                        minHeight: 380
                    }}
                >

                </Footer>
            </Layout>

        </div>
    )
}

export default ProfileUser;