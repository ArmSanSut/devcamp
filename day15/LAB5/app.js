
const express = require('express');
const mysql = require('mysql2');
const app = express();

app.get('/api/users', (req, res) => {
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // <== ระบุให้ถูกต้อง
//   password: '1234',  // <== ระบุให้ถูกต้อง
  database: 'codecamp',
});

// เปิด connection ไปที่ database
connection.connect();

connection.query('SELECT * from user', (err, rows, fields) => {
  if (err) throw err;

  // return response กลับไปหา client โดยแปลง record เป็น json array
  res.json(rows);
});

// ปิด connection
connection.end();
});

app.listen(3000, () => {
console.log('server started on port 3000!');
});



