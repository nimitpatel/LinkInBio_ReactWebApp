const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Links', DataSchema);