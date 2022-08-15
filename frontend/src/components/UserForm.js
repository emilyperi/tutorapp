import React from "react"
import {useState} from "react"
import tutorService from "../services/tutor"

function UserForm(props) {
    const [price, setPrice] = useState(80)
    const [subject, setSubject] = useState("all")
    const [schedule, setSchedule] = useState({
        "monday": false, 
        "tuesday": false, 
        "wednesday": false, 
        "thursday": false,
        "friday": false,
        "saturday": false,
        "sunday": false
    })
    const subjects = props.subjects

    const handleSubmit = (event) => {
        event.preventDefault()
        let params = {
            price: price,
            schedule: Object.keys(schedule).filter(key => schedule[key])
        }

        if (subject !== "all") {
            params.subject = subject
        }
        console.log(params)
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
                <label htmlFor="price">Max price per hour ${price}: </label>
                <input type="range" id="price" name="price" min="0" max="80" value={price} onChange={handlePriceChange}/>
            </fieldset>
            <fieldset>
                <legend>Scheduling</legend>
                <div>
                <input type="checkbox" id="monday" name="monday" value="monday" onChange={handleScheduleChange} />
                <label htmlFor="monday">Monday</label><br/>
                <input type="checkbox" id="tuesday" name="tuesday" value="tuesday" onChange={handleScheduleChange} />
                <label htmlFor="tuesday">Tuesday</label><br/>
                <input type="checkbox" id="wednesday" name="wednesday" value="wednesday" onChange={handleScheduleChange} />
                <label htmlFor="wednesday">Wednesday</label><br/>
                <input type="checkbox" id="thursday" name="thursday" value="thursday" onChange={handleScheduleChange} />
                <label htmlFor="thursday">Thursday</label><br/>
                <input type="checkbox" id="friday" name="friday" value="friday" onChange={handleScheduleChange} />
                <label htmlFor="Friday">Friday</label><br/>
                <input type="checkbox" id="saturday" name="saturday" value="saturday" onChange={handleScheduleChange} />
                <label htmlFor="saturday">Saturday</label><br/>
                <input type="checkbox" id="sunday" name="sunday" value="sunday" onChange={handleScheduleChange}  />
                <label htmlFor="sunday">Sunday</label>
                </div>
            </fieldset>
            <button type="submit">Search</button>
            <button type="reset">Reset</button>
        </form>
    )
}

export default UserForm