import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);

    const renderList = products.map((product) => {
        const { id, title, price, image, category } = product;
        return (
            <div className='col-md-3' key={id}>
                <Link to={`product/${id}`} >
                    <div className="card mt-5">
                        <div className="card-body">
                            <img src={image} className="card-img-top" alt={title} />
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">$ {price}</p>
                            <p className="card-text">{category}</p>

                        </div>
                    </div>
                </Link>
            </div>

        )
    })

    return (
        <>{renderList}</>

    )
}

export default ProductComponent;