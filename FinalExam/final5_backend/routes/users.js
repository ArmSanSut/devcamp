var express = require('express');
var router = express.Router();

const mysql = require('mysql2');

router.get('/', (req, res) => {
  const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'finalexam',
        port: 3306,
      });
  
  try {
    const result = connection.query('SELECT employee.id as Employee_ID, employee.firstname as fisrtname, employee.lastname as lastname, job.job_name as JOBNAME FROM `employee` INNER JOIN job ON employee.job_id = job.id GROUP BY job.id');

    res.json({
      result: result[0]
    });
    connection.end();
  }catch (error){
    res.json({
      error : error
    })
  }
    
});



module.exports = router;
