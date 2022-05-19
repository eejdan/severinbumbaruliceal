const mongoose = require('mongoose'); 

const mediaSchema = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        required: false
    },
    desc: {
        type: String, 
        required: false
    },
    media: {
        data: Buffer,
        contentType: String
    }
}, {
    collection: 'media'
});

module.exports = mongoose.model('Media', mediaSchema);