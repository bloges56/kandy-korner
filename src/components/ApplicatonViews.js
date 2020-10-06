import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"

export const ApplicationViews = (props) => {
    return (

        <LocationProvider>
            <Route exact path ="/">
                <LocationList />
            </Route>
        </LocationProvider>
        
    )
}