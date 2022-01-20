const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const audioLabelSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: false
    },
    dob: Date,
    fatherName: String,
    email: {
        type: String,
        required: true
    },
    companyName: String,
    address: String,
    phoneNo:{
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    photo: {
        data: Buffer,
        contentType: String
    },
}, {timestamps: true})

const AudioLabel = mongoose.model('audioLabel',audioLabelSchema, 'audioLabels');
module.exports = AudioLabel;