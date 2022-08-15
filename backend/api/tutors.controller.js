const Tutors = require('../models/tutors.js')
const Subjects = require('../models/subjects.js')

class TutorsController {
    static async apiGetTutors(req, res, next) {
        try {
        let filters = {}
        if (req.query.price) {
            filters.price = req.query.price
        }
        if (req.query.subject) {
            filters.subject = req.query.subject
        }
        if (req.query.schedule) {
            filters.schedule = {}
            console.log(req.query.schedule)
            req.query.schedule.forEach(day => {
                filters.schedule[day] = true;
            })
        }
        const {matchedTutors, numTutors} = await Tutors.getTutors(filters)

        let response = {
            tutors: matchedTutors,
            total_results: numTutors
        }
        res.json(response)
        } catch(e) {
            res.status(502).json({error: "server error"})
        }
    }

    static async apiGetSubjects (req, res, next) {
        try {
            const subjects = await Subjects.getAll()
            let response = {
                subjects: subjects
            }
            res.json(response)
        } catch(e) {
            console.log(`Failed to send response ${e}`)
            res.status(502).json({error: "server error"})
        }
    }
}

module.exports = TutorsController