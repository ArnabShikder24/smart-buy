import React from 'react';
import './Product.css'

const Product = ({product, addToCart}) => {
    const {name, price, img} = product;
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt="product" />
            </div>
            <div className='product-info'>
                <h4>{name}</h4>
                <p className='info-price'>Price: ${price}</p>
            </div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default Product;