import React from "react"
import {useState} from "react"

function UserForm(props) {
    const [cost, setCost] = useState(80)
    const handleSubmit = (event) => {
        event.preventDefault()
        props.setSubmitted(true)
    }

    const handleReset = (event) => {
        setCost(80)
    }

    const handlePriceChange = (event) => {
        setCost(event.target.value)
    }


    return (
        <form onSubmit={handleSubmit} onReset={handleReset}>
            <fieldset>
                <legend>Subject</legend>
                <input type="checkbox" id="subject1" name="subject1" value="math" />
                <label htmlFor="subject1">Math</label><br/>
                <input type="checkbox" id="subject2" name="subject2" value="physicalScience" />
                <label htmlFor="subject2">Physical Science</label><br/>
                <input type="checkbox" id="subject3" name="subject3" value="humanities" />
                <label htmlFor="subject3">Humanities</label><br/>
                <input type="checkbox" id="subject4" name="subject4" value="socialScience" />
                <label htmlFor="subject4">Social Science</label>
            </fieldset>
            <fieldset>
                <legend>Price range</legend>
                <label htmlFor="cost">Max price per hour ${cost}: </label>
                <input type="range" id="cost" name="cost" min="0" max="80" value={cost} onChange={handlePriceChange}/>
            </fieldset>
            <fieldset>
                <legend>Scheduling</legend>
                <div>
                <input type="checkbox" id="monday" name="monday" value="monday" />
                <label htmlFor="monday">Monday</label><br/>
                <input type="checkbox" id="tuesday" name="tuesday" value="tuesday" />
                <label htmlFor="tuesday">Tuesday</label><br/>
                <input type="checkbox" id="wednesday" name="wednesday" value="wednesday" />
                <label htmlFor="wednesday">Wednesday</label><br/>
                <input type="checkbox" id="thursday" name="thursday" value="thursday" />
                <label htmlFor="thursday">Thursday</label><br/>
                <input type="checkbox" id="friday" name="friday" value="friday" />
                <label htmlFor="Friday">Friday</label><br/>
                <input type="checkbox" id="saturday" name="saturday" value="saturday" />
                <label htmlFor="saturday">Saturday</label><br/>
                <input type="checkbox" id="sunday" name="sunday" value="sunday" />
                <label htmlFor="sunday">Sunday</label>
                </div>
            </fieldset>
            <button type="submit">Search</button>
            <button type="reset">Reset</button>
        </form>
    )
}

export default UserForm