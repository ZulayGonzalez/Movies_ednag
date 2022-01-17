import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetallePaje from './Pages/DetallePaje';
import InicialPage from './Pages/InicialPage';
import UseContext from './UseContext';
import { useState } from 'react';
import NoFound from './Pages/NoFound';
import Titulo from './Components/Titulo';

const Rutas = () => {

    const [movie, setMovie] = useState([]);

    return (
        <>
            <UseContext.Provider value={{ movie, setMovie }}>
                <BrowserRouter>
                    <Routes>

                        <Route exact path="/" element={<InicialPage />} />
                        <Route exact path="detalle-page" element={<DetallePaje />} />
                        <Route path="*" element={<NoFound />} />


                    </Routes>

                </BrowserRouter>


            </UseContext.Provider>



        </>
    )
}

export default Rutas
