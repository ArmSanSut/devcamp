const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded( {extended: false} ));
app.use(bodyParser.json());

app.post('/api/product', (req, res) => {
    console.log('test');
    const connection = mysql.createConnection( {
        host: 'localhost',
        user: 'root',
        database: 'day18',
        port: 3306,
        multipleStatements: true,
    });
    connection.connect((err)=> {
        if(!err)
        console.log("connected")
        else
        console.log("failed", err);
    });
    
    connection.query(`
        insert into stock (product_name, stock_left, category) 
        values ('${req.body.product_name}', '${req.body.stock_left}', '${req.body.category}')`, (err, rows, fields)=> {
            
            res.json(rows);
        });

    connection.end();
})

app.put('/api/product/:id', (req, res) => {
    const connection = mysql.createConnection( {
        host: 'localhost',
        user: 'root',
        database: 'day18',
        port: 3306
    });
    connection.connect((err)=> {
        if(!err)
        console.log("connected")
        else
        console.log("failed", err);
    });
    
    connection.query(`update stock set product_name = '${req.body.product_name}'
        where id = ${req.params.id}`, (err, rows, fields) => {
            if(rows.affectedRows == 1) {
                res.status(200).send("Updated!!!!")
            } else {
                res.status(400).send("ID is not available to update");
            }
            res.json(rows);
        });
    connection.end();
})

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
})