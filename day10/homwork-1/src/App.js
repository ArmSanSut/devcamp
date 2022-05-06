import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import TableComp from './Table';
import { Layout, Menu, Breadcrumb,} from 'antd';



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
        />
        </Header>
        <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
            <TableComp />
             
        </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
            <h2>DEV CAMP DAY 10</h2>
            <p>Ant Design ©2018 Created by Ant UED</p>

        </Footer>
        </Layout>
    );
    

}
function App(){

  return <LayoutFunc />
}
export default App;
