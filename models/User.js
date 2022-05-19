const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String, // no username
    displayName: {
        type: String,
        default: '',
    },
    password: {
        type: String,
    },
    title: {
        type: String,
        default: '' // folosit numai de administratorii platformei
    },
    creationDate: {
        type: String,
        default: Date.now()
    },
    univRole: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'universities'
    }
}, {
    collection: 'users'
});

module.exports = mongoose.model('User', userSchema);