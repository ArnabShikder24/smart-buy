import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css';
import Modal from '../Modal/Modal';
import Question from '../Question/Question';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);
    const [random, setRandom] = useState([])

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const addToCart = (clickedProduct) => {
        if(carts.length <= 3) {
            const cartItems = [...carts, clickedProduct];
            setCarts(cartItems);
        }
        else {
            alert('You cannot add more than four');
        }
    };
     
    const chooseRandom = () =>  {
        if(carts.length === 0) {
            alert('You do not have any cart')
        }
        else {
            const random = Math.floor(Math.random() * carts.length);
            const randomOne = carts[random]
            setRandom([randomOne]);
        }  
    };

    const resetAll = () => {
      setCarts([])
    };

    return (
        <div>
            <div className='modal'>
                {
                    random.map(one => <Modal key={one.id} random={one}></Modal>)
                }
            </div>
            <div className='shop-container'>
                <div>
                    <div className="product-flex">
                        <div className='products-container'>
                            {
                                products.map(product => <Product 
                                    product={product}
                                    key={product.id} 
                                    addToCart={addToCart}                   
                                ></Product>)
                            }
                        </div>      
                    </div>
                    <div>
                        <Question></Question>
                    </div>
                </div>
                <div className="cart-container">          
                    <h2>Selected Router</h2>
                    <div className='cart-item-container'>
                        {
                            carts.map(item => <Cart key={item.id} cart={item}></Cart>)
                        }
                    </div>
                    <p style={{color: '#dfab00f8'}}>Double cilck for get 1</p>
                    <button title='if button does not work propperly, Please click double' onClick={chooseRandom}>CHOOSE 1 FOR ME</button><br /><br />
                    <button onClick={resetAll}>RESET ALL</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;