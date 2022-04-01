import React from 'react';
import './Cart.css'

const Cart = ({cart, deleteSpecificProduct}) => {
    const {name, img} = cart;
    return (
        <div className='cart-item'>
            <img src={img} alt="img" />
            <p>{name}</p>
            <button onClick={() => deleteSpecificProduct(cart)} className='item-btn'>delete</button>
        </div>
    );
};

export default Cart;