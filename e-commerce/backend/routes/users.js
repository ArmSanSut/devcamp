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
  console.log(req.body.product_name)
  connection.query(`
      insert into stock (product_name, stock_left, category, photo) 
      values ('${req.body.product_name}', '${req.body.stock_left}', '${req.body.category}','${req.body.photo}')`, (err, rows, fields)=> {
        console.log(err)  
        res.json(rows);
      });
  
  connection.end();
})

app.put('/product/:id', (req, res) => {
  const connection = mysql.createConnection( {
      host: 'localhost',
      user: 'root',
      database: 'e-commerce',
      port: 3306
  });
  connection.connect((err)=> {
      if(!err)
      console.log("connected")
      else
      console.log("failed", err);
  });
  
  connection.query(`update stock set product_name = '${req.body.product_name}', stock_left = '${req.body.stock_left}', category = '${req.body.category}'
      where id = ${req.params.id}`, (err, rows, fields) => {
        console.log(err);
          if(rows.affectedRows == 1) {
              res.status(200).send({message: "Updated!!!!"})
          } else {
              res.status(400).send({message: "ID is not available to update"});
          }
          // res.json(rows);
      });
  connection.end();
})

app.delete('/product/:id', (req,res) => {
  const connection = mysql.createConnection ({
      host: 'localhost',
      user: 'root', 
      database: 'e-commerce',
      port : 3306  
  });

  connection.connect();

  connection.query(`
      delete from stock 
      where id = ${req.params.id}`, (err, rows, fields) => {
          if(rows.affectedRows == 1) {
              res.status(200).send("Deleted")
          } else {
              res.status(400).send("Not allow to delete");
          }
          res.json(rows);
      }
  )
  connection.end();
})


 module.exports = app;
 