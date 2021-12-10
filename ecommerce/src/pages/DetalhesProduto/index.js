/* eslint-disable no-unused-vars */
import { useParams, useNavigate } from "react-router";
import { Helmet } from "react-helmet";
import "./style.scss";
import { Container, Row, Col, Card, Button, Img } from "react-bootstrap";
import { CarrinhoContext } from '../../contexts/Carrinho';
import { useContext, useState } from 'react';
import SearchBox from '../../components/SearchBox/'
import Product from '../../img/product.svg';

import useAxios from "../../hooks/useAxios";

const DetalhesProduto = () => {
    let carrinho = useNavigate();
    const id = useParams();
    const detalhes = useAxios(`/${id.id}`);
    const { adicionarCarrinho } = useContext(CarrinhoContext);

    const [quantidade, setQuantidade] = useState(1)

    const handleAdicionarCarrinho = (produto) => {
        produto.quantidade = quantidade
        adicionarCarrinho(produto)
        setTimeout(() => { carrinho('/carrinho') }, 500);
    }

    return (
        <>
            <Helmet title={`CTD Commerce | ${detalhes !== null ? detalhes.titulo : 'Produto não encontrado'}`}></Helmet>

            <section id="product-card">
                {detalhes !== null ? < Container >
                    <Row>
                        <Col sm={6} className="text-center">
                            <Card.Img variant="top" src={detalhes.image} alt={detalhes.titulo} title={detalhes.titulo} />
                        </Col><Col sm={6}>
                            <Card.Body>
                                <Card.Title className="display-4" title={detalhes.titulo}>{detalhes.titulo}</Card.Title>
                                <Card.Title className="display-6">R$ {detalhes.preco}</Card.Title>
                                <Button variant="secondary" onClick={() => { handleAdicionarCarrinho(detalhes) }} >Adicionar ao carrinho</Button>
                            </Card.Body>
                        </Col>
                    </Row>
                    <Container id="product-details">
                        <Card.Body>
                            <Card.Title className="display-4" >{detalhes.titulo}</Card.Title>
                            <Card.Text style={{ height: '6rem' }} >
                                {detalhes.descricao}
                            </Card.Text>
                        </Card.Body>
                    </Container>
                </Container>
                    : <Container className="align-items-center text-center my-5">
                        <SearchBox />
                        <h2 className="display-4 m-4">Produto não encontrado</h2>
                        <img src={Product} alt="Produto não encontrato" style={{width: "25vw"}}/>
                    </Container>}
            </section>
        </>
    )
}

export default DetalhesProduto;