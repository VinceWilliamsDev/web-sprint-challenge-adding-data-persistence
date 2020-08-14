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

router.post('/resources', (req, res) => {
    db.addResource(req.body)
        .then(ids => {
            res.json({id: ids})
        })
        .catch(err => {
            res.status(500).json({error: err.message})
        })
})

router.post('/tasks', (req, res) => {
    db.addTask(req.body)
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

router.get('/resources', (req, res) => {
    db.findResources()
        .then(resources => {
            res.json({resources})
        })
        .catch(err => {
            res.status(500).json({error: error.message})
        })
})

router.get('/tasks', (req, res) => {
    db.findTasks()
        .then(tasks => {
            res.json({tasks})
        })
        .catch(err => {
            res.status(500).json({error: error.message})
        })
})