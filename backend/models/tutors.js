const data = require("../data.js")

let tutors

class TutorsList {
    static injectDB() {
        if (tutors) {
            return
        } 
        try {
            tutors = data.tutors
        } catch (e) {
            console.error(`Unable to load data: ${e}`)
        }
    }

    static async getTutors(filters = null)
    {
        console.log(filters)
        let matchedTutors
        if (filters) {
            matchedTutors = tutors.filter((tutor) => {
            let matchPrice = true;
            let matchSubject = true;
            let matchSchedule = true;

            if ("subject" in filters && filters["subject"] !== "all") {
                matchSubject = tutor.subjects.includes(filters.subject)
            }

            if ("price" in filters) {
                matchPrice = Number(tutor.price) <= Number(filters.price)
            }

            if ("schedule" in filters) {
                const days = Object.keys(filters.schedule).filter(day => filters.schedule[day])
                matchSchedule = days.filter(day => tutor.schedule[day]).length > 0
            }
            return matchPrice && matchSubject && matchSchedule
            })
        } else {
            matchedTutors = tutors
        }
        const numTutors = matchedTutors ? matchedTutors.length : 0          
        return {matchedTutors, numTutors}
    }
}

module.exports = TutorsList