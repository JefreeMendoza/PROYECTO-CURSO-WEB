import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PageHome from '../Pages/PageHome'
import PageAbout from '../Pages/PageAbout'
import PageProductos from '../Pages/PageProductos'
import PageServicios from '../Pages/PageServicios'
import PageContactanos from '../Pages/PageContactanos'



function AppRouter() {
    return(
        <BrowserRouter>
            <Routes>

                <Route
                    exact path='/'
                    element= {<PageHome/>}
                />

                <Route
                    exact path='/about'
                    element= {<PageAbout/>}
                />

                <Route
                    exact path='/productos'
                    element= {<PageProductos/>}
                />

                <Route
                    exact path='/servicios'
                    element= {<PageServicios/>}
                />

                <Route
                    exact path='/contactanos'
                    element= {<PageContactanos/>}
                />

            </Routes>
        </BrowserRouter>
    );
} export default AppRouter;