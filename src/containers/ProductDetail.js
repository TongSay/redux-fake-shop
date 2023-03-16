import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions/productActions';

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.product);
  console.log(product);

  const fetchProductDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(selectedProduct(response.data));
  }
  useEffect(() => {
    fetchProductDetail();
  }, [productId]);

  return (
    <div className='container'>
      <div className="row">
        <div className='col-md-4' key={product.id}>
          <div className="card mt-5">
            <div className="card-body">
              <img src={product.image} className="card-img-top" alt={product.title} />
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">$ {product.price}</p>
              <p className="card-text">{product.category}</p>

            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default ProductDetail