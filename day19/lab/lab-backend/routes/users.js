const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();
const port = 5000;
var cors = require('cors');

app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());
app.use(cors());




/* GET users listing. */

app.post('/store-data', (req, res) => {

  const connection = mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    database: 'day19',
    port: 3306,
    multipleStatements: true,
  });
  
  connection.connect((err)=> {
    if(!err)
    console.log("connected")
    else
    console.log("failed", err);
  });
  console.log('inside body ',req.body);

  connection.query(`
      insert into employee (first_name, last_name, phone_number, email, address, district, sub_district, city, post_code, ident_id) 
      values ('${req.body.first_name}','${req.body.last_name}','${req.body.phone_number}','${req.body.email}','${req.body.address}','${req.body.district}','${req.body.sub_district}','${req.body.city}','${req.body.post_code}','${req.body.ident_id}')`, (employee_err, employee_rows, employee_fields)=> {
        console.log(employee_err);
        connection.query(`
        insert into company (company_name, company_address, duration, position, employee_id) 
        values ('${req.body.company_name}', '${req.body.company_address}', '${req.body.duration}', '${req.body.position}', '${employee_rows.insertId}')`, (err, rows, fields)=> {

          console.log(err);
          connection.end();
            res.json(rows);
        });
          
      });


 
})

app.listen(port, ()=> {
  console.log(`Listening at port number : ${port}`)
})

module.exports = app;