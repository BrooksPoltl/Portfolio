const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    projectUrl:{
        type:String,
        required: true
    },
    githubUrl:{
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
        required: true
    },
    languages:{
        type: Array,
        required: true
    },
    libraries:{
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('project', projectSchema)