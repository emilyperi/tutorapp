import React from "react";

function Bio ({tutor}) {
    const name = tutor ? tutor.name : ""
    const subjects = tutor ? tutor.subjects.join(", ") : ""
    const price = tutor ? tutor.price : 0
    const schedule = tutor ? Object.keys(tutor.schedule)
                                .filter(key => tutor.schedule[key])
                                .map(day => day.charAt(0).toUpperCase() + day.slice(1))
                                .join(", ")
                                : "No"

    return (
        <div>
            <h4>Name: {name}</h4>
            <div>Subjects: {subjects}</div>
            <div>Price: ${price}/hr</div>
            <div>Available: {schedule}</div>
            <div><button>Contact</button></div>
        </div>
    )
}
export default Bio