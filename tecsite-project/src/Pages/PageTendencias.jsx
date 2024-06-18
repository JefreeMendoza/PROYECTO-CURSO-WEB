import NavBar from "../Components/NavBar";

function PageTendencias() {
    return (  
        <>
            <NavBar/>
            
            <div class="container">

                <div 
                    id="nav-placeholder"
                >
                </div>

                <h1>
                    Estas en la seccion de TENDENCIAS
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

export default PageTendencias;