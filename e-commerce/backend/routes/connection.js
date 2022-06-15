var mysql = require('mysql2/promise');

var pool      =    mysql.createPool({
    connectionLimit : 10,
    host     : 'ls-ef37a41998a70fbd69c47eee6d293e5edd32f079.cstul75eyljg.ap-southeast-1.rds.amazonaws.com',
    user     : 'dbmasteruser',
    password : 'dbmasteruser',
    database : 'dbmaster',
    port: 3306,
});    

module.exports = pool;