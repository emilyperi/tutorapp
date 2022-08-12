import React from "react";
import Bio from "./Bio"

function SearchResults (props) {
    const size = props.size || 0
    return (
        <>
            <div>Found {size} search results</div>
            { size > 0
                ? props.tutors.map(tutor => <Bio tutor={tutor} key={tutor.id} />)
                : <div>Please try again with a different search</div>
            }
        </>
    )
}

export default SearchResults