import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import ContentComp from './Content';

const { Header, Content, Footer } = Layout;

function LayoutFunc (){
    let menu = ['Home','Portfolio','Content','About Us']
    return (
        <Layout className="layout">
        <Header>
        <div className="logo" />
            {/* <img /> */}
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            items = {menu.map ((x) => {
                return {key : x, label : x};
            })}
            // items={new Array(15).fill(null).map((_, index) => {
            // const key = index + 1;
            // return {
            //     key,
            //     label: `nav ${key}`,
            // };
            // })}
        />
        </Header>
        <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
            
            <ContentComp />   
        </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
            <h2>DEV CAMP DAY 10</h2>
            <p>Ant Design ©2018 Created by Ant UED</p>

        </Footer>
        </Layout>
    );
    

}
export default LayoutFunc;
