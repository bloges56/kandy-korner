import React from "react"

export const LocationCard = (props) => (
    <>
        <div class="location">
            <div>Adress: {props.address}</div>
            <div>Square Footage: {props.footage}</div>
            <div>Handicap: {props.handicap}</div>
        </div>
    </>
)