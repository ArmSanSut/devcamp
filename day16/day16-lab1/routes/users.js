var express = require('express');
var router = express.Router();
var mysql = require('mysql2/promise');



/* GET users listing. */
router.get('/', async (req, res, next)  =>{
  
     const connection = await mysql.createConnection ({
      host: 'localhost',
      user: 'root', // <== ระบุให้ถูกต้อง
      // password: 'root', // <== ระบุให้ถูกต้อง
      database: 'codecamp', // <== ระบุ database ให้ถูกต้อง
      port: 3306, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
    })
   
      try {
        const users = await connection.query('SELECT * from user');
        const classrooms = await connection.query('SELECT * from classroom');
        
        res.json({
          users: users[0],
          classrooms: classrooms[0],
        });
        await connection.end();
      } catch (error) {
        res.json({ error: err });
      }});

module.exports = router;
