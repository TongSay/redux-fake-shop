
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import { fetchProducts } from '../redux/actions/productActions';

const ProductListing = () => {

   
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchProducts());
      }, []);
    return (
        <div className='container'>
            <div className="row">
                <ProductComponent />
            </div>
        </div>
    )
}

export default ProductListing;

