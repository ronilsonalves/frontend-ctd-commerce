import { BrowserRouter, Routes, Route} from 'react-router-dom';

/* Importem as páginas abaixo */
import Produtos from '../pages/Produtos';
import DetalhesProduto from '../pages/DetalhesProduto';
import ProdutosPorCategoria from '../pages/ProdutosPorCategoria';
import SearchResults from '../pages/SearchResults';
import Header from '../components/Header/Header';
import Home from '../pages/Home/Home';
import Footer from '../components/Footer/Footer';

const RouteList = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/produto/:id" element={<DetalhesProduto />} />
            <Route path="/produtos/categoria/:category" element={<ProdutosPorCategoria />} />
            <Route path="/busca/:byname" element={<SearchResults />} />
        </Routes>
        <Footer />
    </BrowserRouter>
);

export default RouteList;