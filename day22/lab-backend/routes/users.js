var express = require('express');
var router = express.Router();

const jwt = require('jsonwebtoken');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
// const Connection = require('mysql2/typings/mysql/lib/Connection');
const res = require('express/lib/response');
const { json } = require('express/lib/response');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', async function(req, res, next){
  const connection = mysql.createPool ( {
    host: 'localhost',
    user: 'root',
    database : 'day22',
    port : 3306
  })
  const {username, password, first_name, last_name, email} = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const result = await connection.execute (
    `INSERT INTO user (username,password, first_name, last_name, email) VALUES ('${username}','${hashedPassword}', '${first_name}', '${last_name}', '${email}')`
  );
  
  await connection.end();
  
  res.send({ id: result[0].insertId });

});

router.get('/mycart', async function (req, res) {
  
      res.json([
        { item: 'Product A selected' },
        { item: 'Product B selected' },
      ]);

 });
 
module.exports = router;
