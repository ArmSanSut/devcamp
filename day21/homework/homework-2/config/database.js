const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    connectionLimit: 1,
    host: 'localhost',
    user: 'root',
    database: 'codecamp',
    port: 3306
})

module.exports = pool;