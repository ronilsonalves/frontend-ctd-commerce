import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Sobre from '../../Pages/SobreNos/index.js';

function Rotas(){
    return(
        <BrowserRouter>
            <nav>
                <Link to="/sobrenos">Sobre nós</Link>
            </nav>
            <Routes>
            <Route path='/sobrenos' element={<Sobre/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;