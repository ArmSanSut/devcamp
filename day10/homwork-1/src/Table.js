import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
//import React, { useState } from 'react';
import { Table, Tag, Space,} from 'antd';
import { Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import { Button, notification } from 'antd';

const openNotification= ()=>{
    notification.open({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
}

const columns = [
    {
      title: 'Avatar', //title = head of the table
      dataIndex: 'avatar', //nested with value
      key: 'avatar', //must be same as key name  
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
        title: 'Name',
        key: 'name',
        dataIndex: 'name',      
    },
        
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: () => (
        <Button type="primary" onClick={openNotification}>
            Notification
        </Button>
      ) 
    },
    {
      title: 'Tag',
      dataIndex: 'tags',
      key: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },


  ];
  const data = [
    {
      avatar: '1',
      button: 'click to COLLECT',
      tags: ['nice', 'developer'],
      name: 'John Cooper',
      address: 'New York No. 1 Lake Park',
      age: '32',     
    },
    {
        avatar: '2',
        button: 'click to SUBMIT',
        tags: ['loser'],
        name: 'Pete Paul',
        address: 'London No. 1 Lake Park',
        age: '26',
    },
    {
        avatar: '3',
        button: 'click to ADJUST',
        tags: ['cool', 'teacher'],
        name: 'Cody Simpson',
        address: 'Sidney No. 1 Lake Park',
        age: '18',
    },
  ];
  const TableComp = () => {
    return (<Table columns={columns} dataSource={data} />);
}

  export default TableComp;