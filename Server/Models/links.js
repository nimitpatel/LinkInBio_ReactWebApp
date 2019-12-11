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

const Links = mongoose.model('Links', DataSchema);

module.exports = Links;