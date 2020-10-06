import React from "react"
import { Route } from "react-router-dom"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicatonViews"
import "./KandyKorner.css"

export const KandyKorner = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
)
