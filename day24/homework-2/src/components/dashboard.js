import React from 'react';
import 'antd/dist/antd.css';
import NavbarWithContext from './NavbarWithContext';
import { Layout } from 'antd';
import AuthContext from './authContext';
const { Header, Content, Footer } = Layout;

const Dashboard = () => {
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

          
          <NavbarWithContext />

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