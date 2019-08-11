const mongoose = require('mongoose');

var Emoloyee = mongoose.model('Employee', {
    name: { type: String },
    position: { type: String }
});

module.exports = { Emoloyee };