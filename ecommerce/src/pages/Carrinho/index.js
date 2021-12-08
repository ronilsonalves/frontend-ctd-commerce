import { Helmet } from "react-helmet";
import { CarrinhoContext } from '../../contexts/Carrinho';
import { useContext } from 'react';
import { Container, ListGroup, Card, Button } from 'react-bootstrap';


const Carrinho = () => {
    const { produtosCarrinho, adicionarCarrinho, removerDoCarrinho, clearAll } = useContext(CarrinhoContext);
    let todosOsProdutos = [...produtosCarrinho]

    function incrementar(produto) {
        produto.quantidade++
        adicionarCarrinho(produto)
    }

    function decrementar(produto) {
        produto.quantidade--
        if (produto.quantidade <= 0) {
            removerDoCarrinho(produto)
        } else {
            adicionarCarrinho(produto)
        }
    }

    let valorTotal = 0
    return (
        <>
            <Helmet><title>CTD Commerce | Carrinho</title></Helmet>


            <ListGroup>
                {todosOsProdutos.length !== 0 && (
                    todosOsProdutos.map((produto) => (
                        <ListGroup.Item key={produto.id} >
                            <Container>
                                <Card className="flex-row my-5">
                                    <Card.Img style={{ width: '100px' }} className="my-50px" src={produto.image} />
                                    <Card.Body className="card-body">
                                        <Card.Title >{produto.titulo}</Card.Title>
                                        <Card.Text style={{ height: '6.50rem' }} title={produto.descricao} className="card-text">
                                            {produto.descricao >= 77 ? produto.descricao : produto.descricao.substring(0, 76) + "..."}
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => { removerDoCarrinho(produto) }}
                                        >Remover do carrinho</Button>
                                    </Card.Body>
                                    <Button variant="primary" className="mx-2" onClick={() => { incrementar(produto) }}
                                    >+</Button>
                                    <Card.Title className="display-3 text-center">{produto.quantidade}</Card.Title>
                                    <Button variant="primary" className="mx-2" onClick={() => { decrementar(produto) }}
                                    >-</Button>
                                    <Card.Title>R${produto.preco} </Card.Title>
                                </Card>
                            </Container>
                            <p style={{ display: 'none' }}>{valorTotal = valorTotal + (produto.quantidade * produto.preco)}</p>
                        </ListGroup.Item>
                    ))
                )}
                <Button variant="primary" className="mx-2" onClick={() => { clearAll() }} >Limpar carrinho</Button>
                <ListGroup.Item>R${valorTotal}</ListGroup.Item>
            </ListGroup>
        </>
    )
}

export default Carrinho;