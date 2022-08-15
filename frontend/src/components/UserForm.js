import React from "react"
import {useState} from "react"
import tutorService from "../services/tutor"
import CheckBox from "./CheckBox"

function UserForm(props) {
    const [price, setPrice] = useState(80)
    const [subject, setSubject] = useState("all")
    const [schedule, setSchedule] = useState({
                                    "monday": true, 
                                    "tuesday": true, 
                                    "wednesday": true, 
                                    "thursday": true,
                                    "friday": true,
                                    "saturday": true,
                                    "sunday": true
                                })
    const subjects = props.subjects

    const handleSubmit = (event) => {
        event.preventDefault()
        let schedList = Object.keys(schedule).filter(key => schedule[key])
        schedList = schedList.length === 0 ? ["None"] : schedList
        
        let params = {
            price: price,
            subject: subject,
            schedule: schedList
        }

        tutorService
            .getFiltered(params)
            .then(response => {
                console.log(response)
                props.setTutors(response.tutors)})
            .catch(error => console.log("error calling tutorService", error))

        props.setSubmitted(true)
    }

    const handleReset = (event) => {
        setPrice(80)
        props.setSubmitted(false)
    }

    const handlePriceChange = (event) => {
        setPrice(event.target.value)
    }

    const handleSubjectChange = (event) => {
        setSubject(event.target.value)
    }

    const handleScheduleChange = (event) => {
        const day = event.target.value
        let newSched = {...schedule}
        newSched[day] = !schedule[day]
        setSchedule(newSched)
    }

    // const handleSelectAll = (event) => {
    //     let checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'))
    //     checkboxes.forEach(box => {
    //         if (box !== event.target) {
    //             return box.checked = event.target.checked
    //         }
    //     })
    // }

    return (
        <form onSubmit={handleSubmit} onReset={handleReset}>
            <fieldset>
                <legend>Subject</legend>
                <select name="subject" onChange={handleSubjectChange}>
                    <option value="all">All Subjects</option>
                    {subjects.map(subject => {
                        return <option value={subject} key={subject}>{subject}</option>
                    })}
                </select>
            </fieldset>
            <fieldset>
                <legend>Price range</legend>
                <div className="flex">
                <label htmlFor="price">Max price per hour ${price}: </label>
                <input type="range" id="price" name="price" min="0" max="80" value={price} onChange={handlePriceChange}/>
                </div>
            </fieldset>
            <fieldset>
                <legend>Scheduling</legend>
                <div>
                <CheckBox id="monday" onChange={handleScheduleChange} />
                <CheckBox id="tuesday" onChange={handleScheduleChange} />
                <CheckBox id="wednesday" onChange={handleScheduleChange} />
                <CheckBox id="thursday" onChange={handleScheduleChange} />
                <CheckBox id="friday" onChange={handleScheduleChange} />
                <CheckBox id="saturday" onChange={handleScheduleChange} />
                <CheckBox id="sunday" onChange={handleScheduleChange} /> 
                </div>
            </fieldset>
            <button type="submit">Search</button>
            <button type="reset">Reset</button>
        </form>
    )
}

export default UserForm