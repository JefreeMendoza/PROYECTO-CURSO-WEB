import NavBar from "../Components/NavBar";

function PagePrecios() {
    return (  
        <>
            <NavBar/>
            
            <div class="container">

                <div 
                    id="nav-placeholder"
                >
                </div>

                <h1>
                    Estas en la seccion de PLANES
                </h1>
                <li> {/* DEBERIA SER BOTON */}
                    <a  href="#">
                        Regresar
                    </a>        
                </li>
                
            </div>

        </>
    );
}

export default PagePrecios;
