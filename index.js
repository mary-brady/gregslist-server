let express = require('express');
let server = express()
let bp = require('body-parser')
let port = 3000

//connect to DB
require('./server-assets/db/mlab-config')

//Register middleware
server.use(bp.json())
server.use(bp.urlencoded({
    extended: true
}))

//Routes
let carRoutes = require('./server-assets/routes/cars-routes')
let houseRoutes = require('./server-assets/routes/houses-routes')
let jobRoutes = require('./server-assets/routes/jobs-routes')

server.use('/cars/', carRoutes)
server.use('/houses/', houseRoutes)
server.use('/jobs/', jobRoutes)

server.listen(port, () => {
    console.log('Runnin on port:', port)
})