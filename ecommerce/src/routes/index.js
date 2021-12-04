import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

/* Importem as páginas abaixo */
import Produtos from '../pages/Produtos';
import ProdutosPorCategoria from '../pages/ProdutosPorCategoria';

const RouteList = () => (
    <BrowserRouter>
        <nav>
            {/* Componente NAVBAR vai aqui */}
        </nav>
        <Routes>
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/produtos/categoria/:category" element={<ProdutosPorCategoria />} />
            {/* Demais rotas vão aqui.... */}
        </Routes>
        <footer>
            {/* Componente Footer vai aqui */}
        </footer>
    </BrowserRouter>
);

export default RouteList;