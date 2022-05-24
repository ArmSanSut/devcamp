var express = require('express');
var router = express.Router();
const pool = require('../config/database');

router.get('/from_user/:id', async (req, res, next) => {
    console.log('data from user')
    const [rows, fields] = await pool.query(`select * from user WHERE id = ?`, [req.params.id]) 
    req.myJSON = rows[0];
    next();
  })

module.exports = router;
