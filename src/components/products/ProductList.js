import React, { useContext, useEffect } from 'react'
import { ProductContext } from './ProductProvider'
import { ProductCard } from './ProductCard'
import { ProductTypeContext } from './ProductTypeProvider'

export const ProductList = () => {

    const { products, getProducts } = useContext(ProductContext)

    const { productTypes, getProductTypes } = useContext(ProductContext)

    useEffect(() => {
        getProducts()
        .then(getProductTypes)
    }, [])

    return (
        <div className="products">
            <h2>Products</h2>
            {
                products.map(product => {
                    return <ProductCard id={product.id} name={product.name} type={productTypes}/>
                })
            }
        </div>
    )

}