import React from 'react';
import './Modal.css'

const Modal = (props) => {
    const {img, name, price} = props.random;
    const crose = () => {
        document.querySelector('.wrap').style.display = "none";
    };

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