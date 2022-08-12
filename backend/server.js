const { response } = require('express')
const express = require('express')
const cors = require('cors')
const app = express()
let data = require("./data")
let tutors = data.tutors

app.use(express.json())
app.use(cors)

const findByName = (name) => {
    const tutor = tutors.find(tutor => {
        return tutor.name.toLowerCase() === name.toLowerCase()
    })
    return tutor
}

app.get('/api/tutors', (request, response) => {
    console.log("received request")
    response.json(tutors)
})

app.get('/api/tutors/:id', (request, response) => {

    const id = Number(request.params.id)
    const tutor = tutors.find(tutor => {
        return tutor.id === id
    })
    if (tutor) {
        response.json(tutor)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/tutors/:id', (request, response) => {
    const id = Number(request.params.id)
    tutors = tutors.filter(tutor => tutor.id !== id)
    response.status(204).end()
})

const generateID = () => {
    const maxId = tutors.length > 0
    ? Math.max(...tutors.map(t => t.id))
    :0
    return maxId + 1
}
app.post('/api/tutors', (request, response) => {
    const body = request.body
    if (!body.name) {
        return response.status(400).json({
            error: 'name missing'
        })
    } else if (findByName(body.name)) {
        return response.status(400).json({
            error: 'name must be unique'
        })
    }

    const tutor = {
        id: generateID(),
        name: body.name,
        subjects: body.subjects || [],
        available: body.available || false
    }

    tutors = tutors.concat(tutor)
    response.json(tutor)
})

const unknownEndpoint = (request, response) => {
    console.log("received unknown request")
    response.status(404).send({error: 'unknown endpoint'})
}

app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)