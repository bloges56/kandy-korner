import React, { useContext, useEffect } from "react"
import { LocationCard } from "./LocationCard"
import { LocationContext } from "./LocationProvider"

export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <div class="locations">
            {
                locations.map(location => {
                    return <LocationCard key={location.id} address={location.address} footage={location.footage}/>
                })
            }
        </div>
    )
}