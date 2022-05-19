const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let users = require('./user.json');


app.get('/api/users', (req, res) => {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root', // <== ระบุให้ถูกต้อง
      database: 'codecamp',
      port : 3306  // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
    });

    connection.connect();
    
    connection.query(`select * from user `, (err, rows, fields) => {
      if (err) throw err;

      res.json(rows);
    });
    
    // ปิด connection
    connection.end();
    });
    

app.put('/user/:id', function (req, res, next) {
 let user = {}
 const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // <== ระบุให้ถูกต้อง
    database: 'codecamp',
    port : 3306  // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
  });

  connection.connect();
  
  connection.query(`update user 
      set Firstname = '${req.body.Firstname}', Lastname = '${req.body.Lastname}'
      where id = ${req.params.id}`, (err, rows, fields) => {
    if (err) throw err;

    res.json(rows);
  });
  
  // ปิด connection
  connection.end();

 
 console.log('Users :', user.Firstname, 'Created!')
 return res.status(201).json({
   code: 1,
   message: 'OK',
   data: users
 });
});

app.listen(port, () => {
   console.log(`Listening at http://localhost:${port}`);
});

