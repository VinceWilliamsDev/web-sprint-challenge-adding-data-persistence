const express = require('express')
const server = express()
const port = 8001

server.use(express.json())

server.get('/', (req, res) => {
    res.send('Welcome to the projects api.')
})

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})