import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { useSelector } from 'react-redux';


const { Header, Content, Footer } = Layout;
function HomePage () {
    const profile = useSelector((state => state.profile));
    const ToProfile = ()=> {
        window.location.href = '/profile';
    }
    const ToProductList = ()=> {
        window.location.href = '/product';
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
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                    >
                        <Menu.Item
                            onClick={ToProductList}
                        >
                            Product List
                        </Menu.Item>
                        <Menu.Item>
                            Cart
                        </Menu.Item>
                        <Menu.Item
                            onClick={ToProfile}
                        >
                            Profile
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
                            minHeight: 600,
                            textAlign: 'center'
                        }}
                    >

                    </div>
                </Content>

                <Footer
                    style={{
                        textAlign: 'center',
                        minHeight: 380
                    }}
                >
                    SHOPPEE CLONING PLATFORM
                </Footer>
            </Layout>
        </>
    )
}

export default HomePage;