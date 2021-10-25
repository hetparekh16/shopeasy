import React from 'react'
import shopCart from '../../img/icons/shopping-cart.png'
import './Header.css'
const Headerbuttons = () => {
    return (
        <div>
            <button class="btn btn-primary mx-2" type="submit">Login</button>
            <button type="button" class="btn btn-warning position-relative">
                <img src={shopCart} className="icon" alt="shopCart" /> Cart
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    99+
                    {/* <span class="visually-hidden">unread messages</span> */}
                </span>
            </button>
        </div>
    )
}

export default Headerbuttons
