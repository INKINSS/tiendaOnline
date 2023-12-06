import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <h1>tiendaOnline</h1>
            <nav>
                <ul>
                    <li><Link to= '/'>Inicio</Link></li>
                    <li><Link to= '/products'>productos</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
