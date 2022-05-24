var express = require('express');
var router = express.Router();
var mysql = require('mysql2/promise');
var bodyParser = require('body-parser')
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({ extended : false }))

var pool = mysql.createPool({
  connectionLimit :10,
  host: 'localhost',
  user: 'root',
  database: 'codecamp'
});

app.get('/user/:id', async function (req, res, next) {
  const[rows, fields] = await pool.query (`select * from user where id = '${req.params.id}'`)
  res.status(200).json(rows[0]);
})

app.put('/user/:id', async function (req,res, next) {
  const [rows, fields] = await pool.query(`update user set Firstname = '${req.body.Firstname}' where id = '${req.params.id}' `) 
  console.log(rows);
  res.status(200).json(rows);
})

app.listen(port, ()=> {
  console.log(`Listening on PORT ${port}!`);
})

module.exports = router;
