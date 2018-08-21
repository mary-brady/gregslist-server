const router = require('express').Router()
let Job = require('../models/Job')

router.get('/:id?', (req, res, next) => {
    if (!req.params.id) {
        Job.find({})
            .then(jobs => {
                return res.send(jobs)
            })
    }
    Job.findById(req.params.id)
        .then(job => {
            res.send(job)
        })
})

router.post('/', (req, res, next) => {
    let newJob = req.body
    Job.create(newJob)
        .then(job => {
            res.send(job)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

router.put('/:id', (req, res, next) => {
    Job.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
        .then(newJob => {
            res.send(newJob)
        })
})

router.delete('/:id', (req, res, next) => {
    Job.findByIdAndRemove(req.params.id)
        .then(oldDeletedJob => {
            res.send('BUHLETED')
        })
})


module.exports = router