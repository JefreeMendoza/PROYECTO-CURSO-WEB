import React from 'react';
import './Styles/Footer.css';

function Footer() {
    return (
        <footer className='footer-container'>
            <div className='footer-links'>
                <a href='/'>Inicio</a>
                <a href='/about'>Sobre Nosotros</a>
                <a href='/services'>Servicios</a>
                <a href='/products'>Productos</a>
                <a href='/contact'>Contáctanos</a>
            </div>
            <div className='footer-info'>
                <p>© 2024 TecSite. Todos los derechos reservados.</p>
                <div className='footer-social'>
                    <a href='https://facebook.com'>Facebook</a>
                    <a href='https://instagram.com'>Instagram</a>
                    <a href='https://tiktok.com'>TikTok</a>
                    <a href='https://whatsapp.com'>Whatsapp</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
