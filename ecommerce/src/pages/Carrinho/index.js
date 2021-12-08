
import { CarrinhoContext } from '../../contexts/Carrinho';
import { useContext } from 'react';
import { Container,ListGroup } from 'react-bootstrap';

const Carrinho = () => {
    const { produtosCarrinho, adicionarCarrinho, removerDoCarrinho } = useContext(CarrinhoContext);
    let todosOsProdutos = [...produtosCarrinho]


const salvarProdutos = new Map();
let produtosUnicos = [];
todosOsProdutos.forEach((produto) => {
    if (!salvarProdutos.has(produto.id)){
        salvarProdutos.set(produto.id, produto);
    }
});

    for (const value of salvarProdutos.values()) {
  produtosUnicos.push(value)
}

    return (
        <>
                                        <ListGroup>
                {produtosUnicos.length !== 0 && (
                                    produtosUnicos.map((produto) =>(
                                            <ListGroup.Item key={produto.id} >{produto.titulo}
                                            <ListGroup.Item>{produto.image}</ListGroup.Item>
                                            <ListGroup.Item>{produto.preco}</ListGroup.Item>
                                            </ListGroup.Item>
                                         ))
                                     )}
                                        </ListGroup>
        </>
    )
}

export default Carrinho;