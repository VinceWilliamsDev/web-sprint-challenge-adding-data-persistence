const express = require('express')
const router = express.Router()
const db = require('./projectsModel')

module.exports = router

router.post('/', (req, res) => {
    db.addProject(req.body)
        .then(ids => {
            res.json({id: ids})
        })
        .catch(err => {
            res.status(500).json({error: err.message})
        })
})

router.get('/', (req, res) => {
    db.findProjects()
        .then(projects => {
            res.json({projects})
        })
        .catch(err => {
            res.status(500).json({error: err.message})
        })
})