var express = require('express');
var router = express.Router();
const mysql = require('mysql2/promise');




router.get('/', async function (req, res) {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    database: 'e-commerce',
    port: 3306, 
  });  
  
  await connection.connect();
 
  console.log('start query at: ' + new Date().getTime());
  await connection.query('SELECT * from stock', (err, rows, fields) => {
    if (err) throw err;
    // console.log(err)
    res.json(rows);
    // res.send("test")
  });
 

  await connection.end();
 });
 console.log("hello")

// router.get('/', (req,res) => {
//   res.send("hello world");
// })

module.exports = router;
