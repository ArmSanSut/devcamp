var express = require('express');
var router = express.Router();
const pool = require('./config/database')
const port = 3000;

var myModule = require('./model/from_user')
var myModule2 = require('./model/from_student')

// var indexRouter = require('./routes/index');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use('/', indexRouter);
app.use('/', myModule);
app.use('/', myModule2);

app.use(async function (req, res, next) {
  req.userId = 1;
  next();
})

app.use(async function (req, res, next){
  const myDate = new Date();
  const additionJSON = [
  {data: req.myJSON},
  {
    additionalData:{
    userId: req.userId,
    thisTime: myDate.getFullYear() + '-' + myDate.getMonth() + '-' + myDate.getDate() +' ' + myDate.getHours() + ':' 
    + myDate.getMinutes() + ':'  + myDate.getSeconds(),
  } 
}]
res.json(additionJSON);
})




app.listen(port, () => {
console.log(`Example app listening on port ${port}`);
})


