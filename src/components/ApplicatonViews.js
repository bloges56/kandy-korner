import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import { ProductProvider } from "./products/ProductProvider"
import { ProductList } from "./products/ProductList"

export const ApplicationViews = (props) => {
    return (

        <ProductProvider>
            <LocationProvider>
                <Route exact path ="/">
                    <LocationList />
                    <ProductList />
                </Route>
            </LocationProvider>
        </ProductProvider>
        
        
    )
}