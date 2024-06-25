import React from 'react'
import { Link , useLocation } from 'react-router-dom'
import '../Styles/NavBar.css'
import imgMain from '../img/img-main.png'


function NavBar() {

    const location = useLocation();

    const getLinkClass = (path) => {
        return location.pathname === path ? 'navbar-link active' : 'navbar-link';
    };

    return (  
        <>
            <div>
                <nav className='navbar-container'>
                    {/* <h1>
                        Hola mundo
                    </h1> */}
                    <img className="img-main"
                        src={imgMain}
                        alt="Logo"
                    />

                    <ul className="navbar-links">
                        <li className='option-main'><Link to="/" className={getLinkClass('/')}>Inicio</Link></li>
                        <li className='option-main'><Link to="/about" className={getLinkClass('/PageAbout')}>Sobre Nosotros</Link></li>
                        <li className='option-main'><Link to="/servicios" className={getLinkClass('/PageServicios')}>Servicios</Link></li>
                        <li className='option-main'><Link to="/productos" className={getLinkClass('/PageProductos')}>Productos</Link></li>
                        <li className='option-main'><Link to="/contactanos" className={getLinkClass('/PageContactanos')}>Contactanos</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default NavBar;

