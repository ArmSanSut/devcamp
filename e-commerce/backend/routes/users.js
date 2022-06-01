var mysql = require('mysql2');
var express = require('express');

const app = express();


app.get('/', function (req, res, next) {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    database: 'e-commerce',
    port: 3306, 
  });
 

  connection.connect();
 
  console.log('start query at: ' + new Date().getTime());
  connection.query('SELECT * from stock', (err, rows, fields) => {
    if (err) throw err;
 
    console.log('end query at: ' + new Date().getTime());
    res.json(rows);
  });
 

  connection.end();
 });

 app.post('/product', (req, res) => {
  const connection = mysql.createConnection( {
      host: 'localhost',
      user: 'root',
      database: 'e-commerce',
      port: 3306,
  });
  connection.connect((err)=> {
      if(!err)
      console.log("connected")
      else
      console.log("failed", err);
  });
  
  connection.query(`
      insert into stock (product_name, stock_left, category, photo) 
      values ('${req.body.product_name}', '${req.body.stock_left}', '${req.body.category}'), '${req.body.photo}'`, (err, rows, fields)=> {
          res.json(rows);
      });
  
  connection.end();
})



 module.exports = app;
 