const router = require('express').Router()
let House = require('../models/House')

router.get('/:id?', (req, res, next) => {
    if (!req.params.id) {
        House.find({})
            .then(houses => {
                return res.send(houses)
            })
    }
    House.findById(req.params.id)
        .then(house => {
            res.send(house)
        })
})

router.post('/', (req, res, next) => {
    let newHouse = req.body
    House.create(newHouse)
        .then(house => {
            res.send(house)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

router.put('/:id', (req, res, next) => {
    House.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
        .then(newHouse => {
            res.send(newHouse)
        })
})

router.delete('/:id', (req, res, next) => {
    House.findByIdAndRemove(req.params.id)
        .then(oldDeletedHouse => {
            res.send('BUHLETED')
        })
})

module.exports = router