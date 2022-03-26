import React from 'react';
import './Modal.css'

const Modal = ({random, crose}) => {
    const {img, name, price} = random;

    return (
        <div className='wrap'>
            <div className='p_wrap'>
                <div className='random-item'>
                    <img src={img} alt="img" />
                    <p>{name}</p>
                    <p>${price}</p>
                    <button className='random-btn'>BUY NOW</button>
                </div>
                <span onClick={crose} className="x" draggable="true">X</span>
            </div>
        </div> 
    );
};

export default Modal;