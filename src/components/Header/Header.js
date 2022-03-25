import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <div className="container">
                <h2>SmartBuy</h2>
                <div>
                    <a href="/new">Routers</a>
                    <a href="/orders">Orders</a>
                    <a href="/Login">Login</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;