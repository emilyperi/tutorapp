const data = require("../data.js")

let subjects

class Subjects {
    static async injectDB() {
        if (subjects) {
            return
        }

        try {

            subjects = new Set(data.tutors.flatMap(tutor => tutor.subjects))
        }
        catch (e) {
            console.log(`Unable to load data ${e}`)
        }
    }

    static async getAll() {
        return Array.from(subjects)
    }
}


module.exports = Subjects