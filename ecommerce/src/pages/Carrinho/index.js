import SearchBox from "../../components/SearchBox";
import { Helmet } from "react-helmet";
import { CarrinhoContext } from '../../contexts/Carrinho';
import { useContext } from 'react';
import { Container, ListGroup, Card, Button, Row, Col } from 'react-bootstrap';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "./style.scss";


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

            <Container className="mt-5">
                <SearchBox />
            </Container>

            <Container className="container-carrinho">
                <ListGroup>
                    {todosOsProdutos.length !== 0 && (
                        todosOsProdutos.map((produto) => (
                            <ListGroup.Item key={produto.id} >
                                <Container>
                                    <Card className="flex-row my-5">
                                        <Card.Img style={{ width: '18vw' }} className="my-50px" src={produto.image} />
                                        <Card.Body className="card-body">
                                            <Card.Title className="display-4">{produto.titulo}</Card.Title>
                                            <Card.Text style={{ height: '6.50rem', width: '18rem', fontSize: '18px'}} title={produto.descricao} className="card-text">
                                                {produto.descricao >= 77 ? produto.descricao : produto.descricao.substring(0, 76) + "..."}
                                            </Card.Text>
                                            <Card.Title id="card-preco" className="display-4">R${produto.preco} </Card.Title>
                                        </Card.Body>
                                        <Row className="qtd-row my-auto">
                                            <Col>
                                                <Button variant="" className="btn-dec" onClick={() => { decrementar(produto) }}
                                                ><AiOutlineMinus /></Button>
                                            </Col>
                                            <Col>
                                                <Card.Title className="display-4">{produto.quantidade}</Card.Title>
                                            </Col>
                                            <Col>
                                                <Button variant="" className="btn-inc" onClick={() => { incrementar(produto) }}
                                                ><AiOutlinePlus />
                                                </Button>
                                            </Col>
                                        </Row>
                                        <Button id="btn-remover-carrinho" variant="secondary" className="my-auto" style={{ height: '6vh' }} onClick={() => { removerDoCarrinho(produto) }}
                                        >Remover do carrinho</Button>
                                    </Card>
                                </Container>
                                <p style={{ display: 'none' }}>{valorTotal = valorTotal + (produto.quantidade * produto.preco)}</p>
                            </ListGroup.Item>
                        ))
                    )}
                    <Button variant="secondary" className="mx-2" onClick={() => { clearAll() }} >Limpar carrinho</Button>
                    <ListGroup.Item className="display-6">Total : R$ {valorTotal.toFixed(2)}</ListGroup.Item>
                </ListGroup>
            </Container>
        </>
    )
}

export default Carrinho;