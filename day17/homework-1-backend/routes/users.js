var express = require('express');
var router = express.Router();
var mysql = require('mysql2');



/* GET users listing. */
router.get('/', function (req, res, next) {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // <== ระบุให้ถูกต้อง
    // password: 'root', // <== ระบุให้ถูกต้อง
    database: 'codecamp', // <== ระบุ database ให้ถูกต้อง
    port: 3306, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
  });
 
  // เปิด connection ไปที่ database
  connection.connect();
 
  // console.log('start query at: ' + new Date().getTime());
  // connection.query(`SELECT course_id as course_name, count(*) as count 
  //   from enrolls 
  //   join students on students.id = enrolls.student_id
  //   group by course_id`, (err, rows, fields) => {
  //   if (err) throw err;
 
  //   console.log('end query at: ' + new Date().getTime());
  //   res.json(rows);
  // });

  connection.query(`SELECT courses.name as course_name, enrolls.student_id as student_id
  from courses
  left JOIN enrolls on courses.id = enrolls.course_id
  WHERE enrolls.course_id is null
  order by courses.id;`, (err, rows, fields) => {
    if (err) throw err;
 
    console.log('end query at: ' + new Date().getTime());
    res.json(rows);
  });
 
  // ปิด connection
  connection.end();
 });
 

module.exports = router;
