// const express = require('express');
// const pool = require('./config/database');
// const myModule = require('./my_module') (pool);
// const port = 3000;

// const app = express();


// app.get('/:id', async function (req,res,next) {
//     console.log( await myModule.getUserId(req.params.id) );
//     console.log( await myModule.getStudentId(2) );
//     res.send('Hello World');
//     next();

// } )

// app.put('/user/:id', async function (req,res, next) {
//     res.json(await myModule.getUserId(req.params.id));
//     console.log(await myModule.getUserId(req.params.id));
//     next();
// })

// app.listen (port, ()=> {
//     console.log(`Listening at port ${port}`);
// })

const express = require('express');
const app = express();

app.use(async (req, res, next) => {
    console.log(req.path + ' : 1');
    next();
 })
 app.use(async (req, res, next) => {
    console.log('2');
    res.send("End Process");
    next();
 })
 app.use(async (req, res, next) => {
    console.log('3');
    next();
 })

app.get('/hello', (req, res) => {
  console.log('hello World')
  res.send('Hello World!');
})

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})


