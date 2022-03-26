import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css';
import Modal from '../Modal/Modal';

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
            setCarts([...carts, clickedProduct]);
        }
        else {
            alert('You cannot add more than four');
        }
    };
     
    function chooseRandom() {
        const random = Math.floor(Math.random() * carts.length);
        const showOne = carts[random];

        setRandom([showOne]);    
    };
    return (
        <div>
            <div className='modal'>
                {
                    random.map(one => <Modal key={one.id} random={one}></Modal>)
                }
            </div>
            <div className='shop-container'>
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
                <div className="cart-container">          
                    <h2>Selected Router</h2>
                    <div className='cart-item-container'>
                        {
                            carts.map(item => <Cart key={item.id} cart={item}></Cart>)
                        }
                    </div>
                    <button onClick={chooseRandom}>CHOOSE 1 FOR ME</button><br /><br />
                    <button>RESET ALL</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;