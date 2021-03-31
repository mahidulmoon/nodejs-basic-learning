const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
//queris import
const db = require('./queries');


//adding middleware
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


//api creation
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })


//crud api
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)


// server setup
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})