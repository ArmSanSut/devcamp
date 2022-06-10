var express = require('express');
var router = express.Router();
var mysql = require('mysql2/promise');

/* GET users listing. */
router.get('/all', async(req, res, next) => {
    const connection = await mysql.createConnection ({
    host: 'localhost',
    user: 'root', // <== ระบุให้ถูกต้อง
    // password: 'root', // <== ระบุให้ถูกต้อง
    database: 'finalexam', // <== ระบุ database ให้ถูกต้อง
    port: 3306, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
});
    try {
      const users = await connection.query('SELECT employee.id as Employee_ID, employee.firstname as fisrtname, employee.lastname as lastname, job.job_name as JOBNAME FROM `employee` INNER JOIN job ON employee.job_id = job.id GROUP BY job.id');
      
      res.json({
        users: users[0]
      });
      await connection.end();
    } catch (error) {
      res.json({ error: error });
    }});

module.exports = router;
