var express = require('express');
var router = express.Router();

const bcrypt = require('bcrypt');
const mysql = require('mysql2/promise')
const jwt = require('jsonwebtoken');

router.post('/', async function(req, res, next){
  const connection = mysql.createPool ( {
    host: 'localhost',
    user: 'root',
    database : 'codecamp',
    port : 3306
  })
  const {username, password, firstname, lastname, email, phone_number} = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  
  
  const result = await connection.execute (
    'insert into register (username, password, firstname, lastname, email, phone_number) values (?,?,?,?,?,?)',[username, hashedPassword, firstname, lastname, email, phone_number]
  );
  
  await connection.end();
  
  res.send({ id: result[0].insertId });

});

router.get('/mycart', async function (req, res) {
  let token = req.headers.authorization;
  if (!token) {
    res.status(401).send('Unauthorized');
  } else {
    try {
      // remove 'Bearer' prefix to validate pure token value
      const decoded = jwt.verify(
        token.replace('Bearer', '').trim(),
        'codecamp_very_$secr3T!'
      );
      console.log(decoded);
      // query user-specific information with decoded as a JSON object
 
      res.send([
        { item: 'Product A selected' },
        { item: 'Product B selected' },
      ]);
    } catch (e) {
      res.status(401).send('Unauthorized');
    }
  }
 });
 


module.exports = router;


