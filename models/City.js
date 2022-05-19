const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    displayName: String,
    hits: {
        type: Number,
        default: 0
    },
    universities: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'universities'
    }]
}, {
    collection: 'cities'
})

module.exports = mongoose.model('City', citySchema);

