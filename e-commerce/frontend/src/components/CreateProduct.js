import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { createItems } from '../Items/productItems';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


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

    const onCreateForm = async (values) => {

        console.log(values);
        try {
            await axios.post('/users/product', {
                product_name: values.product_name,
                stock_left: values.stock_left,
                category: values.category,
                photo: values.photo
            })
        } catch (e) {
            console.log(e);
        }

        navigate('/homepage');
    }
    let filename = '';
    //Upload image files
    const props = {
        name: 'file',
        action: '/users/upload',
        headers: {
          authorization: 'authorization-text',
        },
    
        onChange(info) {
          console.log(info.file)
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
    
          if (info.file.status === 'done') {
              console.log('test file.name',info.file.name)
              filename = info.file.response.filename;
              message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
          }
        },
      };

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
                onFinish={onCreateForm}
            >
                <Form.Item
                    label="Product Name"
                    name="product_name"
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
                    name="stock_left"
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
                    style={{
                        marginLeft: 347
                    }}
                >
                    <Upload {...props}>
                        <Button
                            icon={<UploadOutlined />}
                        >
                            Click to Upload Image
                        </Button>
                    </Upload>
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