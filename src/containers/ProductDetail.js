import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const {id, image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
  },[]);
  return (
    <div className='container'>
      <div className="row">
        <div className='col-md-4' key={id}>
          <div className="card mt-5">
            <div className="card-body">
              <img src={image} className="card-img-top" alt={title} />
              <h5 className="card-title">{title}</h5>
              <p className="card-text">$ {price}</p>
              <p className="card-text">{description}</p>
              <p className="card-text">{category}</p>

            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default ProductDetail