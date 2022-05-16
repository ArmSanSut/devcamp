const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/index', (req, res) => {
 res.render('result', { dataResult: `result from ${req.query.name}` });
});
app.get('/skill', (req, res) => {
    res.render('skill', { dataResult: `result from ${req.query.name}` });
});
app.get('/contact', (req, res) => {
    res.render('contact', { dataResult: `result from ${req.query.name}` });
});
app.get('/portfolio', (req, res) => {
    res.render('portfolio', { dataResult: `result from ${req.query.name}` });
});


app.listen(3000, () => {
 console.log('server started on port 3000!');
});
