import { Link, useParams } from "react-router-dom";


function Stock () {
    const products = [
        {id: 1, product: 'The Alchemist'},
        {id: 2, product: 'Atomic Habits'},
        {id: 3, product: 'How to win friends and influence people'},
        {id: 4, product: 'Rich dad, Poor dad'},
        {id: 5, product: 'Sapiens'}
    ]
    return (
        <>
            <h1>Our stock list</h1>
            <ul>
                {products.map(x => 
                    <li><Link to={`${x.id}/${x.product}`}>{x.product}</Link></li>)}
            </ul>
        </>
    );
}

function StockDetail () {
    let param = useParams();
    console.log(param);
    return (
    <>
        <h2>Stock Details</h2>
        <p>You open product {param.id} which is {param.product}</p>
    </>
    );
}

export  {Stock,StockDetail};