import React from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';

function NavbarWithContext() {
    const username = localStorage.getItem('username');
    console.log(username)
    const logOut = ()=> {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        window.location.href = '/'
    }

    const ToDashboard = ()=> {
      window.location.href = '/dashboard';
    }

    const ToStock = ()=> {
      window.location.href = '/stock';
    }

    const ToWarehouse = ()=> {
      window.location.href = '/warehouse';
    }
    return (
        <>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
            >
                <Menu.Item
                    onClick={ToDashboard}
                >
                    Dashboard
                </Menu.Item>
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
                    onClick={logOut}
                    key="logout"
                    style={{
                        display: 'flex',
                        alignContent: 'flex-end'
                    }}
                >
                    LOG-OUT
                </Menu.Item>

                <Menu.Item
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                    }}
                >
                    Hello {username}
                </Menu.Item>

            </Menu>
        </>
    )
}

export default NavbarWithContext;