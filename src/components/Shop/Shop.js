import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
        <div className="product-flex">
            <div className='products-container'>
                {
                    products.map(product => <Product 
                        product={product}
                        key={product.id}                    
                    ></Product>)
                }
            </div>      
        </div>
        <div className="cart-container">          
            <h2>Selected Router</h2>
            <div className='cart-item-container'>

            </div>
            <button>CHOOSE 1 FOR ME</button><br /><br />
            <button>RESET ALL</button>
        </div>
    </div>
    );
};

export default Shop;