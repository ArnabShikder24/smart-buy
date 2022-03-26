import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
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
            <button onClick={() => addToCart(product)}>
                Add to Cart 
                    <FontAwesomeIcon className='icon' icon={faCartPlus}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;