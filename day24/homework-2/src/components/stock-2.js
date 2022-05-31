import {Layout, Menu} from 'antd' ;

const { Header, Content, Footer} = Layout;

function NotAllow () {
    const notAllow = ()=> {
        window.location.href = '/dashboard';
    }
    const ToStock = ()=> {
        window.location.href = '/stock'
    }
    const ToWarehouse = ()=> {
        window.location.href = '/warehouse'
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
                        <Menu.Item 
                            onClick={ToStock}
                        >
                            Stock Management
                        </Menu.Item>
                        <Menu.Item 
                            onClick={ToWarehouse}
                        >
                            Warehouse Management
                        </Menu.Item>
                        <Menu.Item
                            onClick={notAllow}
                        >
                            Back to Homepage
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
                        THIS IS STOCK!!!!
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
}

export default NotAllow;