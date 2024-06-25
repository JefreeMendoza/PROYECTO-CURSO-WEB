import TopBar from "../Components/TopBar";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

import imgWeb from '../img/web.png';
import imgPc from '../img/pc.png';
import imgIns from '../img/instalacion.png';
import imgDatos from '../img/datos.png';

function PageServicios() {
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
                    Estas en la seccion de SERVICIOS
                </h1>

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

            </div>
            <Footer />
        </>
    );
}

export default PageServicios;