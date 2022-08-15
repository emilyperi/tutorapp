const express = require('express')
const cors = require('cors')
const data = require('./data')
const tutors = require('./api/tutors.routes')
const TutorsList = require("./models/tutors")
const Subjects = require("./models/subjects")
const app = express()

app.use(cors())
app.use('/api/tutors', tutors)
app.use("*", (req, res) => res.status(404).json({error: "not found"}))

const PORT = 5000
app.listen(PORT, () => {
    TutorsList.injectDB()
    Subjects.injectDB()
    console.log(`Server running on port ${PORT}`)
})