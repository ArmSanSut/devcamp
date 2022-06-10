var express = require('express');
var router = express.Router();

const mysql = require('mysql2/promise');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.post('/token', async function (req, res) {
    const { username, password } = req.body; 

 const connection = await mysql.createConnection({
   host: 'localhost',
   user: 'root', 
   database: 'e-commerce', 
   port: 3306, 
 });
 

 const result = await connection.query(
   `SELECT * FROM login WHERE username='${username}'`
 );
 
 await connection.end();
 console.log('test');
 if (result[0].length > 0) {
   const passwordMatch = await bcrypt.compare(password, result[0][0].password);
   if (passwordMatch) {

     const privateKey = 'codecamp_very_$secr3T!';
     const token = jwt.sign(
       {
         id: result[0][0].id,
         username: result[0][0].username,
       },
       privateKey,
       { expiresIn: '24h' }
     );
     res.json({ token: token });
   } else {
     res.status(401).send({ error: 'invalid credential' });
     return;
   }
 } else {
   res.status(401).send({ error: 'user not found' });
   return;
 }

});

module.exports = router;