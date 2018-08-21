let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schema = new Schema({
    company: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    hours: {
        type: Number
    },
    rate: {
        type: Number
    },
    description: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Job', schema)