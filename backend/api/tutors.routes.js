const express = require('express')
const router = express.Router()
const TutorsCtrl = require('./tutors.controller.js')


router.route("/").get(TutorsCtrl.apiGetTutors)
router.route("/subjects").get(TutorsCtrl.apiGetSubjects)

module.exports = router