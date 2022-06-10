var mysql = require('mysql2/promise');
var express = require('express');
const bcrypt = require('bcrypt');


const app = express();


app.get('/', async function (req, res, next) {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'e-commerce',
    port: 3306,
  });
  console.log(connection);
  // connection.connect((err) => {
  //   if(err) 
  //   console.log(err);
  // });

  console.log('start query at: ' + new Date().getTime());
  const result = await connection.query('SELECT * from stock');
  res.send(result);


  await connection.end();
});

let filename;

/*------------------------------Image Uploading-------------------------------------------------- */
app.post("/upload", (req, res) => {
  console.log('upload files', req.files);
  const newpath = __dirname + "/../public/upload-files/";
  const file = req.files.file;
  
  const dotIndex = file.name.lastIndexOf('.');
  const fileExtension = file.name.substr(dotIndex);
  const randomFilename = (new Date()).getTime();
  filename = randomFilename + fileExtension;

  file.mv(`${newpath}${filename}`, (err) => {
    if (err) {
      res.status(500).send({ message: "File upload failed" });
    }
    res.status(200).send({ message: 'success', filename: filename });
  });


});

app.post('/product', (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'e-commerce',
    port: 3306,
  });
  connection.connect((err) => {
    if (!err)
      console.log("connected")
    else
      console.log("failed", err);
  });

  console.log(req.body.product_name)
  connection.query(`
      insert into stock (product_name, stock_left, category, photo) 
      values ('${req.body.product_name}', '${req.body.stock_left}', '${req.body.category}','${filename}' )`, (err, rows, fields) => {
    console.log(err)
    res.json(rows);
  });

  connection.end();
})

/*------------------------------Password Encryption-------------------------------------------------- */
app.post('/', async function (req, res) {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    database: 'e-commerce',
    port: 3306, 
  });
 
  const { username, password } = req.body; // รับ post json object
  const hashedPassword = await bcrypt.hash(password, 10); // เข้ารหัส password ที่ส่งเข้ามา ก่อนลง db
 
  const result = await connection.execute(
    `INSERT INTO login (username,password) VALUES ('${username}','${hashedPassword}')`
  ); // insert ข้อมูล
 
  // ปิด connection
  await connection.end();
 
  // ตอบกลับ client เป็น id ของ user ที่ insert
  res.send({ id: result[0].insertId });
 });
 



app.put('/product/:id', (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'e-commerce',
    port: 3306,
  });
  connection.connect((err) => {
    if (!err)
      console.log("connected")
    else
      console.log("failed", err);
  });

  connection.query(`update stock set product_name = '${req.body.product_name}', stock_left = '${req.body.stock_left}', category = '${req.body.category}'
      where id = ${req.params.id}`, (err, rows, fields) => {
    console.log(err);
    if (rows.affectedRows == 1) {
      res.status(200).send({ message: "Updated!!!!" })
    } else {
      res.status(400).send({ message: "ID is not available to update" });
    }
    // res.json(rows);
  });
  connection.end();
})

app.delete('/product/:id', (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'e-commerce',
    port: 3306,
  });

  connection.connect();

  connection.query(`
      delete from stock 
      where id = ${req.params.id}`, (err, rows, fields) => {
    if (rows.affectedRows == 1) {
      res.status(200).send("Deleted")
    } else {
      res.status(400).send("Not allow to delete");
    }
    res.json(rows);
  }
  )
  connection.end();
})


module.exports = app;
