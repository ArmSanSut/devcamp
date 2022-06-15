var mysql = require('mysql2/promise');
var express = require('express');
const bcrypt = require('bcrypt');

const pool = require('../routes/connection');

const app = express();

app.get('/', async function (req, res, next) {


  console.log('start query at: ' + new Date().getTime());
  const result = await pool.query('SELECT * from stock');
  res.json(result[0]);

});

let filename;

/*------------------------------Image Uploading-------------------------------------------------- */
app.post("/upload", async (req, res) => {
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

app.post('/product', async (req, res) => {
  
  await pool.connect((err) => {
    if (!err)
      console.log("connected")
    else
      console.log("failed", err);
  });

  console.log(req.body.product_name)
  const result2 = await pool.query(`
      insert into stock (product_name, stock_left, category, photo) 
      values ('${req.body.product_name}', '${req.body.stock_left}', '${req.body.category}','${filename}' )`)

    res.json(result2[0]);

})

/*------------------------------Password Encryption-------------------------------------------------- */
app.post('/', async function (req, res) {
  
  const { username, password } = req.body; // รับ post json object
  const hashedPassword = await bcrypt.hash(password, 10); // เข้ารหัส password ที่ส่งเข้ามา ก่อนลง db
 
  const result = await pool.execute(
    `INSERT INTO login (username,password) VALUES ('${username}','${hashedPassword}')`
  ); // insert ข้อมูล
 
  // ตอบกลับ client เป็น id ของ user ที่ insert
  res.send({ id: result[0].insertId });
 });
 



app.put('/product/:id', async (req, res) => {

  await pool.connect((err) => {
    if (!err)
      console.log("connected")
    else
      console.log("failed", err);
  });

  await pool.query(`update stock set product_name = '${req.body.product_name}', stock_left = '${req.body.stock_left}', category = '${req.body.category}'
      where id = ${req.params.id}`)

})

app.delete('/product/:id', async (req, res) => {

  await pool.connect();

  const result3 = await pool.query(`
      delete from stock 
      where id = ${req.params.id}`)
  
      res.json(result3[0]);

})


module.exports = app;
