import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../components/Home/Home.js';
import Sobre from '../Pages/SobreNos/index.js';
import Produtos from '../components/Produtos/Produtos.js';   


function Routelist(){
    return(
        <BrowserRouter>        
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/produto' element={<Produtos/>}/>
            <Route path='/sobrenos' element={<Sobre/>} />        
            </Routes>
        </BrowserRouter>
    )
}

export default Routelist;