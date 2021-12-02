import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

/* Importem as páginas abaixo */
import TestApi from '../pages/TestApi';
import Produtos from '../pages/Produtos';

const RouteList = () => (
    <BrowserRouter>
        <nav>
            {/* Componente NAVBAR vai aqui */}
        </nav>
        <Routes>
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/produtos/:category" element={<Produtos />} />
            <Route path="/test" element={<TestApi />} />

            {/* Demais rotas vão aqui.... */}
        </Routes>
        <footer>
            {/* Componente Footer vai aqui */}
        </footer>
    </BrowserRouter>
);

export default RouteList;