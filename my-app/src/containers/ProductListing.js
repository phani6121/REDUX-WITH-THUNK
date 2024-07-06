import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import ProductComponent from './ProductComponent';
import { fetchProducts } from "../redux/actions/productActions"
// import axios from "axios"

const ProductListing = () => {

    const products = useSelector((state) => state)
    const dispatch = useDispatch()

    // const fetchProducts = async () => {
    //     const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
    //         console.log("Err", err);
    //     })
    //     dispatch(setProduct(response.data));
    // }

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    console.log("products", products);
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing;
