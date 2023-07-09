

import { NavLink } from 'react-router-dom'
import "../styles/Navbar.css"
import { useSelector } from 'react-redux'
import { Suspense } from 'react'
const Header = () => {
    const items = useSelector((state) => state.cart.cart)
    return (
        <div className='left'>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/cart">cart</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>

                    <Suspense fallback={<div>loging...</div>} >
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </Suspense>

                    <li>card item: {items.length}</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header