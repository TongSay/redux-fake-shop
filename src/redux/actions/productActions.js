import { ActionTypes } from "../contants/action-type"
import {useDispatch, useSelector } from 'react-redux';
import axios from "axios";




export const fetchProducts = async () => {

        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
            console.log("Erorr", err)
        });
      setProducts(response.data)

    }
export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
   
}

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}