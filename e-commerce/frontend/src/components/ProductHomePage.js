import React, { useReducer } from 'react';
import 'antd/dist/antd.css';

import { useState, useEffect } from 'react';
import axios from 'axios'
import { Table, Avatar, Button, Space } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';

import { useDispatch, useSelector } from 'react-redux';
import { initData } from '../Items/productItems'
import { useNavigate } from 'react-router-dom';

//create context to get data from database

function HomePage() {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const display = useSelector(state => state.product);
    const navigate = useNavigate()

    //get data from database 
    useEffect(() => {
        axios.get('http://localhost:3000/users')
            .then(result => dispatch(initData(result.data)))
            .catch(e => console.log(e))
    }, []);

    useEffect(() => {
        setData(display.productList)
    }, [display.productList])

    /*-----------------DELETE COMPONENTS---------------------------*/

    const onDelete =  (id) => {
        window.confirm("sure to delete?")
        try {
             axios.delete(`http://localhost:3000/users/product/${id}`) //ลบข้อมูลจาก id ของสินค้านั้นๆ
             .then(() => {
                 axios.get('http://localhost:3000/users')   //ดึงข้อมูลเดิมกลับมาเพื่อแสดงผล
             })

        } catch (e) {
            console.log(e);
        }
        window.location.href = '/';
    }

    /*-----------------CREATE COMPONENTS---------------------------*/
    const ToCreate = () => {
        window.location.href = '/view-product';
    }

    /*-----------------EDIT COMPONENTS---------------------------*/
    const onEdit = (e, index) => {
        e.preventDefault()
        navigate(`/update-product/${index}`)
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
            render: (_, record, i) => (
                <>
                    <Space>
                        {/* <a href={`/update-product/${i}`}> */}
                        <Button type="primary" onClick={e => onEdit(e, i)}>
                            EDIT
                        </Button>
                        {/* </a> */}
                        <Button type='danger' onClick={() => onDelete(record.id)}>
                            DELETE
                        </Button>
                    </Space>

                </>

            )
        },
    ];



    return (
        <>
            <Table 
                columns={columns} 
                dataSource={data} 
                rowKey={x => x.id}

            />
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
                    style = {{
                        marginBottom : 50
                    }}
                >
                    CREATE
                </Button>
            </Space>

        </>
    )
}

export default HomePage;