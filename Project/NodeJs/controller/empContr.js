const express = require('express');
var router = express.Router();

var { Employee } = require('../models/employee');

router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) { res.send(docs); } else {
            console.log('Err');
        }
    });
});

router.post('./', (req, res) => {
    var emp = new Employee({
        name: req.body.name,
        position: req.body.position
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); } else { console.log("err"); }
    })
})

module.exports = router;