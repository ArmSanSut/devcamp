const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    connectionLimit: 1,
    host: 'localhost',
    user: 'root',
    database: 'codecamp'
})

module.exports = pool;