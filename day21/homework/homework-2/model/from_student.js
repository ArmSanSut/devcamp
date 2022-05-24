var express = require('express');
var router = express.Router();
const pool = require('../config/database');

router.get('/from_student/:id', async (req, res, next) => {
    console.log('data from students')
    const [rows, fields] = await pool.query(`select * from students WHERE id = ?`, [req.params.id]) 
    req.myJSON = rows[0];
    next();
  })

module.exports = router;
