import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

const Header = () => {
    return (
        <header>
            <h1 className='nameShop'>TIENDA</h1>
            <nav>
                <ul>
                    <li><Link className='redirect' to= '/'>Inicio</Link></li>
                    <li><Link className='redirect' to= '/products'>productos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
