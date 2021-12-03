import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from '../components/Home/Home.js';
import Sobre from '../Pages/SobreNos/index.js';


function Routelist(){
    return(
        <BrowserRouter>        
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/sobrenos' element={<Sobre/>} />        
            </Routes>
        </BrowserRouter>
    )
}

export default Routelist;