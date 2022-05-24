var express = require('express');
var router = express.Router();
var mysql = require('mysql2/promise');
const pool = require('../config/database.js');


router.get('/from_user/:id', async (req, res, next) => {
  console.log('data from user')
  req.myJSON = await pool.query(`select * from user WHERE id = ?`, [req.params.id]) // assume variable
  next();
})

router.get('/from_student/:id', async (req, res, next) => {
  console.log('data from student')
  req.myJSON = await pool.query(`select * from students WHERE id = ?`, [req.params.id]) // assume variable
  next();
})

module.exports = router;
