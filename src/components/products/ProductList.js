import React, { useContext, useEffect } from 'react'
import { ProductContext } from './ProductProvider'
import { ProductCard } from './ProdcuctCard'

export const ProductList = () => {

    const { products, getProducts } = useContext(ProductContext)

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className="products">
            <h2>Products</h2>
            {
                products.map(product => {
                    return <ProductCard id={product.id} name={product.name} type={product.productType.type}/>
                })
            }
        </div>
    )

}