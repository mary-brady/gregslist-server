let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schema = new Schema({
    bedrooms: {
        type: Number,
        required: true
    },
    bathrooms: {
        type: Number,
        required: true
    },
    imgUrl: {
        type: String,
    },
    levels: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})



module.exports = mongoose.model('House', schema)