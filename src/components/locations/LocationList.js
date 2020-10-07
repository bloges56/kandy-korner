import React, { useContext, useEffect } from "react"
import { LocationCard } from "./LocationCard"
import { LocationContext } from "./LocationProvider"

export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <div className="locations">
            {
                locations.map(location => {
                    return <LocationCard key={location.id} address={location.address} footage={location.footage} handicap={location.handicap}/>
                })
            }
        </div>
    )
}