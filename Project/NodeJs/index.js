const express = require('express');
const bodyParser = require('body-parser');

const{ mongoose } = require('./db.js');
var employeeCntr = require('./controller/empContr.js');

var app = express();
app.use(bodyParser.json());


app.listen(3000, () => console.log("server connected"));
app.use('/employees', employeeCntr);

console.log(33333);