import React from 'react'
import './404.scss'
import { Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <main className='pageError'>
            <div className='contentMessageError'>
                <section className='headerMessageError'>
                    <div className='circles'>
                        <div className='circle red'></div>
                        <div className='circle yellow'></div>
                        <div className='circle green'></div>
                    </div>
                </section>
                <section className='bodyMessageError'>
                    <h2>Lo sentimos...</h2>
                    <p>parece que la pagina que quiere visitar <strong>no existe</strong>, puedes volver a la página principal aqui. </p>
                    <button className='buttonError'><Link className='button' to='/'>regresar</Link></button>
                </section>
            </div>
        </main>
    )
}

export default Error404
