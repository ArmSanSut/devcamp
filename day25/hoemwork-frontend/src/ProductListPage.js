import { Layout, Menu, Badge } from 'antd';
import product from './components/createProduct';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './addCart';
import { createFromIconfontCN } from '@ant-design/icons';
const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
});

const { Header, Content, Footer } = Layout;

function ProductList() {
    const addProduct = useSelector(state => state.product);
    console.log('add',addProduct);
    const dispatch = useDispatch();

    const ToProfile = () => {
        window.location.href = '/profile';
    }

    const ToProductList = () => {
        window.location.href = '/product';
    }

    console.log(product);

    //กดปุ่มเพื่อเพิ่มจำนวนสินค้าในตะกร้า
    const addCart = (e,data)=> {
        console.log('add to cart', data)
        dispatch(addToCart(data));
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
                        <Menu.Item>
                        <Badge count= {addProduct.length}>
                            <IconFont 
                                type="icon-shoppingcart" 
                                style={{
                                    fontSize : 25,
                                    color : 'white'
                                }}
                                />
                        </Badge>
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
                    {/* <p>{JSON.stringify(addProduct)}</p> */}
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 600,
                            textAlign: 'center'
                        }}
                    >
                        <div 
                            style={{
                                display : 'flex',
                                flexWrap : 'wrap'
                            }}
                        >
                            {product.map((x) => {

                                return (
                                    <div
                                        style={{
                                            margin : 25
                                        }}
                                    >
                                        <p style={{fontWeight : 'bold'}}>Product ID : {x.id}</p>
                                        <img
                                            src={x.img}
                                            alt='img'
                                        />
                                        <p>Product Name : {x.name}</p>
                                        <p>Sell Price : {x.sellPrice}</p>
                                        <p>Discount Percentage : {Math.round(((x.sellPrice - x.normalPrice)/(x.normalPrice))*100)}</p>
                                        {x.quantity != 0 ? <button 
                                            onClick={e=>addCart(e,x)}>Add to Cart</button> : <p>SOLD OUT</p>}
                                        
                                    </div>
                                )

                            })}
                        </div>

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
export default ProductList;