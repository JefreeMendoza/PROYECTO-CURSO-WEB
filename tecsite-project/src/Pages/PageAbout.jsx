import TopBar from "../Components/TopBar";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

import imgAboutUs from '../img/AboutUs.png';

function PageAbout() {
    return (
        <>
            <TopBar />
            <NavBar />

            <div class="container">

                <div
                    id="nav-placeholder"
                >
                </div>

                <h1>
                    Estas en la seccion SOBRE NOSOTROS
                </h1>

                <section className='about-us'>
                    <h2>Sobre Nosotros</h2>
                    <p>En TecSite, nos dedicamos a hacer que la tecnología funcione a tu favor. Ofrecemos servicios de Desarrollo Web, Mantenimiento y Ensamblaje de PC y Laptops, Instalación de Sistemas Operativos y Programas, Recuperación de Archivos y Eliminación de Virus.</p>
                    <img src={imgAboutUs} alt='About Us' className='about-image' />
                </section>

            </div>
            <Footer />
        </>
    );
}

export default PageAbout;