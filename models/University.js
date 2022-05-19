const mongoose = require('mongoose');

const universitySchema = new mongoose.Schema({
    displayName: String,
    city: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'cities'
    },
    active: { //pentru ca administratorul universitati sa poata scoate temporar siteul de pe lista
        type: Boolean,
        default: true
    },
    address: String,
    quickDesc: String,
    quickFaculties: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'faculties'
    }],
    desc: String,
    firstSectionLayoutType: [{  // 0 = personalizat
        type: Number,
        default: 1
    }],
    carouselMedia: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: ''
    }],
    carouselLayoutType: {
        type: Number,
        default: 1
    },
    sections: [{
        active: { 
            // ca administratorul universitati sa poata 
            // scoate sectiunii temporar
            type: Boolean, default: false
        },
        layoutType: { // 0 = personalizat 
            type: Number, default: 1 
        },
        backgroundLayoutType: { 
            type: Number, default: 1 
        },
        backgroundMedia: {
            type: mongoose.SchemaTypes.ObjectId,
        },
        title: String,
        desc: String,
        button: { type: Boolean, default: false },
        customConfiguration: {
            type: Object,
            required: false
        },
    }],
    faculties: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'faculties'
    }]
}, {
    collection: 'universities'
});

universitySchema.index({ 
    displayName: 'text' 
})

module.exports = mongoose.model('University', universitySchema);