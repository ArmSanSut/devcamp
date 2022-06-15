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
        axios.get('/users')
            .then(result => dispatch(initData(result.data)))
            .catch(e => console.log(e))
    }, []);

    useEffect(() => {
        setData(display.productList)
    }, [display.productList])

    /*-----------------DELETE COMPONENTS---------------------------*/

    const onDelete =  (id) => {
        window.confirm("Are you sure to delete the corresponding data?")
        try {
             axios.delete(`/users/product/${id}`) //ลบข้อมูลจาก id ของสินค้านั้นๆ
             .then(() => {
                 axios.get('/users')   //ดึงข้อมูลเดิมกลับมาเพื่อแสดงผล
             })

        } catch (e) {
            console.log(e);
        }
        window.location.href = '/homepage';
    }

    /*-----------------CREATE COMPONENTS---------------------------*/
    const ToCreate = () => {
        window.location.href = '/view-product';
    }

    /*-----------------EDIT COMPONENTS---------------------------*/
    const onEdit = (e, index) => {
        e.stopPropagation();
        e.preventDefault();
        navigate(`/update-product/${index}`)
    }

    const displayRowData = (e, index)=> {    
        e.preventDefault();
        console.log('click to display');
        console.log(index)
        navigate(`/display/${index}`);
    }

    const columns = [
        {
            title: 'Photo',
            dataIndex: 'photo',
            key: 'photo',
            render: (_, r) => (
                <Avatar 
                    src= {`/static/upload-files/${r.photo}`}
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
                        
                        <Button type="primary" onClick={e => onEdit(e, i)}>
                            EDIT
                        </Button>
                        
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
                onRow={(e, i) => {
                    return {
                      onClick : (e) => {
                          displayRowData(e, i)
                        } // click row
                    };
                  }}
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