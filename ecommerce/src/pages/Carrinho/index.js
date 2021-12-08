
import { CarrinhoContext } from '../../contexts/Carrinho';
import { useContext, useEffect } from 'react';
import { Container, ListGroup, Card, Button } from 'react-bootstrap';

const Carrinho = () => {
    const { produtosCarrinho, adicionarCarrinho, removerDoCarrinho } = useContext(CarrinhoContext);
    let todosOsProdutos = [...produtosCarrinho]

    // const salvarProdutos = new Map();
    // let produtosUnicos = [];
    // todosOsProdutos.forEach((produto) => {
    //     if (!salvarProdutos.has(produto.id)) {
    //         salvarProdutos.set(produto.id, produto);
    //     }
    // });

    // for (const value of salvarProdutos.values()) {
    //     produtosUnicos.push(value)
    // }

    console.log(todosOsProdutos)
    return (
        <>
            <ListGroup>
                {todosOsProdutos.length !== 0 && (
                    todosOsProdutos.map((produto) => (
                        <ListGroup.Item key={produto.id} >
                            <Container>
                                <Card className="flex-row">
                                    <Card.Img style={{ width: '100px' }} className="my-50px" src={produto.image} />
                                    <Card.Body className="card-body">
                                        <Card.Title >{produto.titulo}</Card.Title>
                                        <Card.Text style={{ height: '6.50rem' }} title={produto.descricao} className="card-text">
                                            {produto.descricao >= 77 ? produto.descricao : produto.descricao.substring(0, 76) + "..."}
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => { removerDoCarrinho(produto) }}
                                        >Remover do carrinho</Button>
                                    </Card.Body>
                                    <Card.Title>R${produto.preco} </Card.Title>
                                </Card>
                            </Container>
                        </ListGroup.Item>
                    ))
                )}
            </ListGroup>
        </>
    )
}

export default Carrinho;