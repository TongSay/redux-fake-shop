
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { fetchProducts } from '../redux/actions/productActions';

const ProductListing = () => {

    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    // const fetchProducts = async () => {
    //     const response = await axios
    //         .get("https://fakestoreapi.com/products")
    //         .catch((err) => {
    //             console.log("Erorr", err)
    //         });
    //     dispatch(setProducts(response.data));
    // }
    //    console.log("Products", products);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [])
    return (
        <div className='container'>
            <div className="row">
                <ProductComponent />
            </div>
        </div>
    )
}

export default ProductListing;

