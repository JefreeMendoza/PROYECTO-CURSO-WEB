import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import '../Styles/PageHome.css';

import imgHero from '../img/Hero.png';
import imgAboutUs from '../img/AboutUs.png';

import imgWeb from '../img/web.png';
import  imgPc from '../img/pc.png';
import imgIns from '../img/instalacion.png';
import  imgDatos from '../img/datos.png';

import  imgAir from '../img/airpods.jpg';
import  imgMax from '../img/max.jpg';



function PageHome() {
    return (  
        <>
            <NavBar/>
            {/* <h1>
                ESTAS EN LA PAGINA DEL HOME
            </h1> */}

            <div className='home-container'>

                <section className='hero-section'>
                    <img src={imgHero} alt='Hero' className='hero-image'/>
                    <div className='hero-text'>
                    <h1>Bienvenido a TecSite</h1>
                    <p>Soluciones tecnológicas confiables y efectivas.</p>
                    <button className='cta-button' onClick={'/PageContactanos'}>Contáctanos</button>
                    </div>
                </section>

                <section className='about-us'>
                    <h2>Sobre Nosotros</h2>
                    <p>En TecSite, nos dedicamos a hacer que la tecnología funcione a tu favor. Ofrecemos servicios de Desarrollo Web, Mantenimiento y Ensamblaje de PC y Laptops, Instalación de Sistemas Operativos y Programas, Recuperación de Archivos y Eliminación de Virus.</p>
                    <img src={imgAboutUs} alt='About Us' className='about-image'/>
                </section>

                <section className='services'>
                    <h2>Servicios</h2>
                    <div className='services-list'>

                        <div className='service-item'>
                            <img src={imgWeb} alt='Service 1' />
                            <h3>Desarrollo Web</h3>
                            <p>Creación de sitios web personalizados.</p>
                        </div>

                        <div className='service-item'>
                            <img src={imgPc} alt='Service 2' />
                            <h3>Mantenimiento de PC</h3>
                            <p>Mantenimiento y ensamblaje de equipos.</p>
                        </div>

                        <div className='service-item'>
                            <img src={imgIns} alt='Service 3' />
                            <h3>Instalación de Programas</h3>
                            <p>Instalación y configuración de software.</p>
                        </div>

                        <div className='service-item'>
                            <img src={imgDatos} alt='Service 4' />
                            <h3>Recuperación de Datos</h3>
                            <p>Recuperación de archivos y eliminación de virus.</p>
                        </div>

                    </div>
                </section>

                <section className='products'>
                    <h2>Productos</h2>
                    <div className='products-list'>

                        <div className='product-item'>
                            <img src= {imgAir} alt='AirPods Max' />
                            <h3>AirPods Max</h3>
                            <p>Con almohadillas intercambiables y excelente sonido.</p>
                        </div>

                        <div className='product-item'>
                            <img src= {imgMax} alt='AirPods Pro' />
                            <h3>AirPods Pro 2da Gen</h3>
                            <p>Compatibles con iOS y Android, con búsqueda por GPS.</p>
                        </div>
                        
                    </div>
                    

                </section>
            </div>


            <Footer/>
        </>
    );
}

export default PageHome;