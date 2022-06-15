import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { createItems } from '../Items/productItems';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

function UpdateProduct() {
    const product = useSelector((state) => state.product);
    console.log(product) //ประกาศเพื่อเรียกใช้ Redux(productList) ที่สร้างไว้
    const {id} = useParams()
    const [data, setData] = useState({})

    //if changes occur in productList -> setData
    useEffect(() => {
        //setData(product.productList[Number.parseInt(id)])     //Number.parseInt(id) === parseInt(id) -> change into json form
        setData(product.productList[parseInt(id)])  //product.productList[parseInt(id)] -> setData to each id that have changes
    }, [product.productList]);

    //define variable to display data in the input form
    const item = product.productList[parseInt(id)];
    const product_name = item.product_name;
    const stock_left = item.stock_left;
    const category = item.category;

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
            await axios.put(`/users/product/${data.id}`, {
                    product_name: values.product_name,
                    stock_left: values.stock_left,
                    category: values.category
                })
        } catch (e) {
            console.log(e);
        }
        window.location.href = '/homepage';
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
                    initialValue={`${product_name}`}
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
                    initialValue={`${stock_left}`}
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
                    initialValue={`${category}`}
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