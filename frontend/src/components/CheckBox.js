import React from "react"

export default function CheckBox (props) {
    const upperCase = props.id.charAt(0).toUpperCase() + props.id.slice(1)
    return (
        <>
        <input type="checkbox" id={props.id} name={props.id} value={props.id} onChange={props.onChange} defaultChecked/>
        <label htmlFor={props.id}>{upperCase}</label><br/>
        </>
    )

}
