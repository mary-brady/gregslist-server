let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schema = new Schema({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String
    }
})

module.exports = mongoose.model('Car', schema)