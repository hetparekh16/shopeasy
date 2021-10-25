import React from 'react'
import shopCart from '../../img/icons/shopping-cart.png'
import './Header.css'
const Headerbuttons = () => {
    return (
        <div>
            <button className="btn btn-primary mx-2" type="submit">Login</button>
            <button type="button" className="btn btn-warning position-relative">
                <img src={shopCart} className="icon" alt="shopCart" /> Cart
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    99+
                    {/* <span className="visually-hidden">unread messages</span> */}
                </span>
            </button>
        </div>
    )
}

export default Headerbuttons
