import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { createItems } from '../Items/productItems';
import { useNavigate } from "react-router-dom";


function CreateProduct() {
    const navigate = useNavigate();
    const create = useSelector((state) => state.product.productList);
    const dispatch = useDispatch();
    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 6,
          
        },
      };

      const onCreateForm = (values)=> {

        console.log(values);
        dispatch(createItems(values));
        // window.location.href = '/';
        navigate('/');
      }

    return (
        <div>
            <Form
                style={{
                    marginTop: 50
                }}
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
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
                {...layout}
                onFinish= {onCreateForm}
            >
                <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Product Name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Stock Left"
                    name="stock"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Stock Left!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Category"
                    name="category"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Product Category!',
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
                        CREATE NEW PRODUCT
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default CreateProduct;