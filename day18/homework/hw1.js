const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/product/:id', (req, res) => {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root', // <== ระบุให้ถูกต้อง
      database: 'day18',
      port : 3306  // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
    });

    connection.connect();
    
    connection.query(`select * from stock
    
        where id = ${req.params.id}`, (err, rows, fields) => {

        console.log(rows);
        console.log(rows.length == 0);
      if (rows.length == 0) {
        res.status(404).send('Product ID Not Available');
      }else {         
         
        res.status(200).send('Product Available');
      }

      res.json(rows);
    });
    
    // ปิด connection
    connection.end();
    });

app.delete('/api/product/:id', (req,res) => {
    const connection = mysql.createConnection ({
        host: 'localhost',
        user: 'root', // <== ระบุให้ถูกต้อง
        database: 'day18',
        port : 3306  
    });

    connection.connect();

    connection.query(`
        delete from stock 
        where id = ${req.params.id}`, (err, rows, fields) => {
            if(rows.affectedRows == 1) {
                res.status(200).send("Deleted")
            } else {
                res.status(400).send("Not allow to delete");
            }
            res.json(rows);
        }
    )

})


app.listen(port, () => {
        console.log(`Listening at http://localhost:${port}`);
     });