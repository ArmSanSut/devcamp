var express = require('express');
var router = express.Router();

const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');


 
 router.post('/', async function (req, res) {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'codecamp', 
    port: 3306, 
  });
 
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
 
  const result = await connection.execute(
    `INSERT INTO login (username,password) VALUES ('${username}','${hashedPassword}')`
  );
 

  await connection.end();
 

  res.send({ id: result[0].insertId });
 });

 
module.exports = router;
