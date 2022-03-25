import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    const {name, img} = cart;
    return (
        <div className='cart-item'>
            <img src={img} alt="img" />
            <p>{name}</p>
            <button className='item-btn'>delete</button>
        </div>
    );
};

export default Cart;