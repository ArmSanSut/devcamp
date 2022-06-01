import React from 'react';
import 'antd/dist/antd.css';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Table, Avatar, Button, Space } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';

import productReducer from '../Items/productItems';
import { useDispatch, useSelector } from 'react-redux';
import { createItems } from '../Items/productItems';


const onEdit = () => {
    console.log('click to edit')
}

const onDelete = () => {
    console.log('click to delete');
}

const ToCreate = ()=> {
    window.location.href = '/view-product';
}

const columns = [
    {
        title: 'Photo',
        dataIndex: 'photo',
        key: 'photo',
        render: () => (
            <Avatar
                size={{
                    xs: 24,
                    sm: 32,
                    md: 40,
                    lg: 64,
                    xl: 80,
                    xxl: 100,
                }}
                icon={<AntDesignOutlined />}
            />
        )
    },
    {
        title: 'Product Name',
        dataIndex: 'product_name',
        key: 'product_name',
    },
    {
        title: 'Stock Left',
        dataIndex: 'stock_left',
        key: 'stock_left',
    },
    {
        title: 'Category',
        key: 'category',
        dataIndex: 'category',
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (
            <>
                <Space>
                    <Button type="primary" onClick={onEdit}>
                        EDIT
                    </Button>
                    <Button type='danger' onClick={onDelete}>
                        DELETE
                    </Button>
                </Space>

            </>

        )
    },
];

function HomePage() {


    // const display = useSelector((state) => state.product.productList);

    // console.log(display);

    const [data, setData] = useState([]);
    useEffect(async () => {
        const fetchData = async ()=> {
            const data = await axios.get('http://localhost:3000/users');
            console.log(data.data);
            const product = data.data;
            setData(product);
        }
        await fetchData();
    }, []);

    return (
        <>
            <Table columns={columns} dataSource={data} />
            <Space
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
            >
                <Button
                    type="primary"
                    onClick={ToCreate}

                >
                    CREATE
                </Button>
            </Space>

        </>
    )
}

export default HomePage;