var express = require('express');
var router = express.Router();
const port = 3000;

var indexRouter = require('./routes/index');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.use(async function (req, res, next) {
  req.userId = 1;
  next();
})

// app.use('/', router);

app.use(async function (req, res, next) {
const myDate = new Date();
const additionJSON = {
  data: req.myJSON,
  additionalData:{
    userId: req.userId,
    thisTime: myDate.getFullYear() + '-' + myDate.getMonth() + '-' + myDate.getDate() +' ' + myDate.getHours() + ':' 
    + myDate.getMinutes() + ':'  + myDate.getSeconds(),
  } 

}
res.json(additionJSON);

}); 


app.listen(port, () => {
console.log(`Example app listening on port ${port}`);
})


