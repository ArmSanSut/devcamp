import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import 'antd/dist/antd.css';
import AuthContext from './authContext';
import { Modal, Layout, Menu, Input, Form, Button } from 'antd';
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const HomeComp = () => {

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
                    <Navbar />
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
                        Content will display here if you LOG-IN
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

export default HomeComp;