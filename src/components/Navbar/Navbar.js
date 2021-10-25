import React from 'react'
import './Navbar.css'

const handleClick = () => {
    document.body.classList.toggle('nav-active')
}
const Navbar = () => {
    return (
        <>
            <div class="menu-icon" onClick={handleClick}>
                <span class="menu-icon__line menu-icon__line-left"></span>
                <span class="menu-icon__line"></span>
                <span class="menu-icon__line menu-icon__line-right"></span>
            </div>

            <div class="nav">
                <div class="nav__content">
                    <ul class="nav__list">
                        <li class="nav__list-item">Home</li>
                        <li class="nav__list-item">About</li>
                        <li class="nav__list-item">Projects</li>
                        <li class="nav__list-item">Contact</li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Navbar
