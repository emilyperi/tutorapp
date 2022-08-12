const express = require('express')
const cors = require('cors')
const data = require('./data')
const app = express()

let tutors = data.tutors
app.use(cors())
app.get('/api/tutors', (request, response) => {
    response.json(tutors)
  })

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})