
import { Route, Routes } from 'react-router-dom'

import Cart from './Cart'
import Header from './Header'
import Contact from './Contact'
import About from './About'
import Store from './Store'
const Navbar = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Store />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />

            </Routes>
        </div>
    )
}

export default Navbar