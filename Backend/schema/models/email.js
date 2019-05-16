const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emailSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    message:{
        type:String,
        required: true
    },
    company:{
        type: String,
        required: true
    },
});

module.exports = mongoose.model('email', emailSchema)