import TopBar from "../Components/TopBar";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

import imgAir from '../img/airpods.jpg';
import imgMax from '../img/max.jpg';

function PageProductos() {
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
                    Estas en la seccion de PRODUCTOS
                </h1>

                <section className='products'>
                    <h2>Productos</h2>
                    <div className='products-list'>

                        <div className='product-item'>
                            <img src={imgAir} alt='AirPods Max' />
                            <h3>AirPods Max</h3>
                            <p>Con almohadillas intercambiables y excelente sonido.</p>
                        </div>

                        <div className='product-item'>
                            <img src={imgMax} alt='AirPods Pro' />
                            <h3>AirPods Pro 2da Gen</h3>
                            <p>Compatibles con iOS y Android, con búsqueda por GPS.</p>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </>
    );
}

export default PageProductos;
