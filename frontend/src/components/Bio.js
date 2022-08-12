import React from "react";

function Bio ({tutor}) {
    const name = tutor ? tutor.name : ""
    const subjects = tutor ? tutor.subjects : []
    const price = tutor ? tutor.price : 0
    const available = tutor ? tutor.available : false

    return (
        <div>
            <h4>Name: {name}</h4>
            <div>Subjects:
                <ul>
                {subjects.map(subject => <li key={subject}>{subject}</li>)}
                </ul>
            </div>
            <div>Price: ${price}/hr</div>
            <div>Available: {available ? "Yes" : "No"}</div>
            <div><button>Contact</button></div>
        </div>
    )
}
export default Bio