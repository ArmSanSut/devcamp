import { Button, Card } from 'antd'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
function ViewProduct() {
    const product = useSelector((state)=> state.product);
    const {id} = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        //setData(product.productList[Number.parseInt(id)])     //Number.parseInt(id) === parseInt(id) _> change into json form
        setData(product.productList[parseInt(id)])  //product.productList[parseInt(id)] -> setData to each id that have changes
    }, [product.productList]);

    console.log(data)

    const item = product.productList[parseInt(id)];
    // console.log(product.productList[parseInt(id)]);
    

    // const product_name = item.product_name;
    // console.log(product_name);
    // const stock_left = item.stock_left;
    // const category = item.category;

    return (
        <>
            <Card
                style={{
                    width: 300,
                    margin: 'auto',
                    marginTop: 150
                }}
            >
                <p>Product Name :  </p>
                <p>Stock Left :</p>
                <p>Category : </p>
            </Card>
            <Button
             type='primary'
             style={{
                marginTop: 50,
                marginLeft:300 
             }}   
            >
                Back To Home HomePage
            </Button>
        </>
    )
}

export default ViewProduct;