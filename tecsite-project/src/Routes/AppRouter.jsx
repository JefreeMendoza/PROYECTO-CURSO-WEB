import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PageHome from '../Pages/PageHome'
import PageProductos from '../Pages/PageProductos'
import PagePrecios from '../Pages/PagePrecios'
import PageTendencias from '../Pages/PageTendencias'
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
                    exact path='/productos'
                    element= {<PageProductos/>}
                />

                <Route
                    exact path='/precios'
                    element= {<PagePrecios/>}
                />

                <Route
                    exact path='/tendencias'
                    element= {<PageTendencias/>}
                />

                <Route
                    exact path='/contactanos'
                    element= {<PageContactanos/>}
                />

            </Routes>
        </BrowserRouter>
    );
} export default AppRouter;