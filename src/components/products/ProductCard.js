import React from 'react'

export const ProductCard = (props) => {
    return (
        <div className="product">
            <div>Name: {props.name}</div>
            <div>Type: {props.type}</div>
        </div>
    )
}