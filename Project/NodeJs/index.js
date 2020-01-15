const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db.js');
var employeeCntr = require('./controller/empContr.js');

var app = express();
app.use(bodyParser.json());


app.listen(3000, () => console.log("server start"));
// app.use('/employees', employeeCntr);
app.use('/emplodepartmen', employeeCntr);
