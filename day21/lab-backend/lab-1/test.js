const express = require('express');
const app = express();
const port = 3000;

var router = express.Router();
router.get('/', async (req, res, next) => {
  console.log('set variable')
  req.myJSON = {a:1, b:2}; // assume variable
  next();
})

router.get('/hello', async (req, res, next) => {
  console.log('set variable')
  req.myJSON = {hello:1, hello2:2}; // assume variable
  next();
})

app.use(async function (req, res, next) {
    req.userId = 1;
    next();
  })

app.use('/', router);

app.use(async function (req, res, next) {
  const myDate = new Date();
  const additionJSON = {
    thisTime: myDate.getFullYear() + ':' + myDate.getMonth() + ':' + myDate.getDate() +' ' + myDate.getHours() + '-' 
            + myDate.getMinutes() + '-'  + myDate.getSeconds(),
    data: req.myJSON,
    myVariable: 12345
  }
  res.json(additionJSON);
}); 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

