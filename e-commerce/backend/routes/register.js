const mysql = require('mysql2/promise');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

router.post('/', async function(req, res, next){
    const connection = mysql.createPool ( {
      host: 'localhost',
      user: 'root',
      database : 'e-commerce',
      port : 3306
    })
    const {username, password, first_name, last_name, email} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const result = await connection.execute (
      `INSERT INTO register (username,password, first_name, last_name, email) VALUES ('${username}','${hashedPassword}', '${first_name}', '${last_name}', '${email}')`
    );
    
    await connection.end();
    
    res.send({ id: result[0].insertId });
  
  });

module.exports = router;
