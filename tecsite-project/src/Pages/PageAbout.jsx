import NavBar from "../Components/NavBar";

function PageAbout() {
    return (  
        <>
            <NavBar/>
            
            <div class="container">

                <div 
                    id="nav-placeholder"
                >
                </div>

                <h1>
                    Estas en la seccion SOBRE NOSOTROS 
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

export default PageAbout;