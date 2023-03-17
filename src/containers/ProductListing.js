import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const [count, Setcount] = useState(1);


  useEffect(() => {
    console.log("Tesssssssssssssssssssssssssssss");
    dispatch(fetchProducts());
  },[]);
  console.log("Products: ", products);
    return (
        <div className='container'>
            <button onClick={()=> Setcount(count + 1)}>Inncrease</button>
            <div className="row">
                <ProductComponent />
            </div>
        </div>
    )
}

export default ProductListing;

