let mongoose = require('mongoose')
const connectionString = 'mongodb://maryb:password1@ds018558.mlab.com:18558/gregslist'
let connection = mongoose.connection

mongoose.connect(connectionString, {
    useNewUrlParser: true
})

connection.on('error', err => {
    console.log("DATABASE ERROR: ", err)
})

connection.once('open', () => {
    console.log("Connected to the DB!")
})