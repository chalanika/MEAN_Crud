const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Mean_Crud', (err) => {
    if (!err)
        console.log('Success');
    else
        console.log("not connect");
});

module.exports = mongoose;