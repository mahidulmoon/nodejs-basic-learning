const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000


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


// server setup
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})