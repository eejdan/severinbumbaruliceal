const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    displayName: String,
    active: {
        type: Boolean,
        default: true
    },
    hits: {
        type: Number,
        default: 0
    },
    specials: {
        type: [String],
        default: []
    }
}, {
    collection: 'faculties'
})

module.exports = mongoose.model('Faculty', facultySchema)