//Example1
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.get('/api/users', (req, res) => {
//    res.status(400).send('Bad Request');
// });

// app.listen(port, () => {
//    console.log(`Listening at http://localhost:${port}`);
// });

//Example2
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.put('/api/users', (req, res) => {
// let name = "DEV-CAMP";

   let name = req.body.name;
   console.log("req",name);
   if(name == undefined){
       res.status(404).send('Not Found');
   }else{
       res.status(200).send(`${name} is OK to proceed.`);
   }
  
});

app.listen(port, () => {
   console.log(`Listening at http://localhost:${port}`);
});

