const express = require('express')
const db = require('../data/dbConfig')

module.exports = {
    findProjects,
    findProjectById,
    addProject,
    // findResources,
    // addResource,
    // findTasks,
    // addTask
}

function findProjects() {
    return db('Projects')
}

function findProjectById(id) {
    return db('Projects')
        .where('id', id)
}

function addProject(project) {
    return db('Projects')
        .insert(project)
        .then(id => {
            return id[0]
        })
        .catch(err => {
            return err
        })
}