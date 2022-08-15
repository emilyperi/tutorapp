import React, { useEffect } from "react";
import {useState} from "react";
import UserForm from './components/UserForm'
import SearchResults from './components/SearchResults'
import tutorService from "./services/tutor"
import subjectService from "./services/subjects"

function App() {
    const [submitted, setSubmitted] = useState(false)
    const [tutors, setTutors] = useState([])
    const [subjects, setSubjects] = useState([])

    useEffect(() => {
        tutorService
            .getAll()
            .then(response => {
                console.log(response)
                setTutors(response.tutors)})
            .catch(error => console.log("error calling tutorService", error))
    }, [])

    useEffect(() => {
        subjectService
            .getAll()
            .then(response => setSubjects(response.subjects))
            .catch(error => console.log("error requestings subjects", error))
    })


    return (
        <>  
            <div className="container-sm center-x"><h1>Find a tutor!</h1>
            <UserForm setTutors={setTutors} setSubmitted={setSubmitted} subjects={subjects}/>
            { submitted
            ? <SearchResults tutors={tutors} size={tutors.length}/>
            : <div>Fill out the form to see the results</div>
            }
            </div>
        </>
    )
}

export default App