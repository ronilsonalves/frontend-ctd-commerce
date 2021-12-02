import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Sobre from '../../Pages/SobreNos';

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/sobrenos' element={<Sobre/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;