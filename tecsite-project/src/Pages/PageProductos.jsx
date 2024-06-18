import NavBar from "../Components/NavBar";

function PageProductos() {
    return (  
        <>
            <NavBar/>
            
            <div class="container">

                <div 
                    id="nav-placeholder"
                >
                </div>

                <h1>
                    Estas en la seccion de PRODUCTOS
                </h1>
                <li> {/* DEBERIA SER BOTON */}
                    <a  href="./PageHome">
                        Regresar
                    </a>        
                </li>
                
            </div>

        </>
    );
}

export default PageProductos;
