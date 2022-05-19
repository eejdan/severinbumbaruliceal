const mongoose = require('mongoose');

const userActivationInstanceSchema = new mongoose.Schema({
    linkCode: {
        type: String,
        required: true,
    },
    accessCode: { //examples B589127 X433221
        type: String,
        required: true,
    },
    hits: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('UserActivationInstance', userActivationInstanceSchema)