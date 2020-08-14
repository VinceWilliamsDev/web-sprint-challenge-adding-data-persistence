const express = require('express')
const db = require('../data/dbConfig')

module.exports = {
    findProjects,
    findProjectById,
    addProject,
    findResources,
    addResource,
    findTasks,
    addTask
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

function findResources() {
    return db('Resources')
}

function addResource(resource) {
    return db('Resources')
        .insert(resource)
        .then(id => {
            return id[0]
        })
        .catch(err => {
            return err
        })
}

function findTasks() {
    return db('Tasks')
        .join('Projects', 'Projects.id', 'Tasks.projectId')
        .select('tasks.id', 
            'projects.projectName', 
            'projects.description as projectDescription', 
            'tasks.description as taskDescription', 
            'tasks.notes', 
            'tasks.completed'
        )
}

function addTask(task) {
    return db('Tasks')
    .insert(task)
    .then(id => {
        return id[0]
    })
    .catch(err => {
        return err
    })
}