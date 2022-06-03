import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { createItems } from '../Items/productItems';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

function UpdateProduct() {
    // const navigate = useNavigate();
    const product = useSelector((state) => state.product);
    const {id} = useParams()
    const [data, setData] = useState({})
    // const dispatch = useDispatch();
    // setData(product.productList)
    // console.log(data);
    useEffect(() => {
        // console.log(product.productList);
        setData(product.productList[Number.parseInt(id)])
        // console.log(product.productList[Number.parseInt(id)]);
    }, [product.productList]);

    // useEffect(() => {
    //     setData(data)
    // }, [data])

    console.log(data);
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 6,

        },
    };

    const onUpdateForm = async (values) => {

        console.log(values);
        try {
            await axios.put(`http://localhost:3000/users/product/${data.id}`, {
                    product_name: values.product_name,
                    stock_left: values.stock_left,
                    category: values.category
                })
        } catch (e) {
            console.log(e);
        }
        window.location.href = '/';
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
                    remember: false,
                }}
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
                {...layout}
                onFinish={onUpdateForm}
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
                    <Input/>
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
                    initialValue={`${data.category}`}
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
                        UPDATE PRODUCT
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default UpdateProduct;