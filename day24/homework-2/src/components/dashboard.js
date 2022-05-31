import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Layout, Menu, Input } from 'antd';
import { useState } from 'react';
const { Header, Content, Footer } = Layout;

const Dashboard = () => {
    const logOut = ()=> {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        window.location.href = '/'
    }
    
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
        <Menu.Item>
            Dashboard
        </Menu.Item> 
        <Menu.Item >
            Stock Management
        </Menu.Item>
        <Menu.Item >
            Warehouse Management
        </Menu.Item>
        <Menu.Item 
            onClick={logOut}
            key="logout"
            style={{
              display : 'flex',
              alignContent : 'flex-end'
            }}
        >
            LOG-OUT
        </Menu.Item> 
        
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
        YOU ARE ABLE TO SEE THE CONTENT!!!!!
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

export default Dashboard;