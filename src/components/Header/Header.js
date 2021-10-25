import React from 'react'
import Navbar from '../Navbar/Navbar'
import logo from '../../img/logo.jpg'
import './Header.css'
import Headerbuttons from './Headerbuttons'
const Header = () => {
    return (
        <div className="d-flex justify-content-between">
            <div className=""><Navbar /></div>
            <div className="my-2"> <img src={logo} alt="logo" className="img-style" /> </div>
            <div className="my-3 mx-4">
                <Headerbuttons />
            </div>
        </div>
    )
}

export default Header
