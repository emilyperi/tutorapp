import React, { useEffect } from "react";
import {useState} from "react";
import UserForm from './components/UserForm'
import SearchResults from './components/SearchResults'
import tutorService from "./services/tutor"

function App() {
    const [submitted, setSubmitted] = useState(false)
    const [tutors, setTutors] = useState([])

    useEffect(() => {
        console.log("About to send request")
        tutorService
            .getAll()
            .then(response => {
                console.log("got tutors")
                setTutors(response.data)})
            .catch(error => console.log("error calling tutorService", error))
    }, [])


    return (
        <>  
            <div className="container-sm center-x"><h1>Find a tutor!</h1>
            <UserForm submitted={submitted} setSubmitted={setSubmitted}/>
            { submitted
            ? <SearchResults tutors={tutors} size={tutors.length}/>
            : <div>Fill out the form to see the results</div>
            }
            </div>
        </>
    )
}

export default App