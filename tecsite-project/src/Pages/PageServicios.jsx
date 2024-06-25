import NavBar from "../Components/NavBar";

function PageServicios() {
    return (  
        <>
            <NavBar/>
            
            <div class="container">

                <div 
                    id="nav-placeholder"
                >
                </div>

                <h1>
                    Estas en la seccion de SERVICIOS 
                </h1>
                <li> {/* DEBERIA SER BOTON */}
                    <a  href="../Html/main.html">
                        Regresar
                    </a>        
                </li>
                
            </div>

        </>
    );
}

export default PageServicios;