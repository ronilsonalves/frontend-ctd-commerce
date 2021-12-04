import React from "react";
import useAxios from "../../hooks/useAxios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Helmet } from "react-helmet";
import './style.scss';

const ProdutosPorCategoria = () => {

    const { category } = useParams();
    const produtos = useAxios(`categoria/${category}`);

    let thubaruba = [];

    produtos.map((categoria) => {
        return thubaruba.push(categoria.nome)
    })

    let titulo = [...new Set(thubaruba)]

    return (
        <>
            <Helmet title={`CTD Commerce | ${produtos !== null ? titulo : 'Categoria não encontrado'}`}></Helmet>
            <section id="produtos">
                <Container className="container">
                    <Row xs={1} sm={2} md={3} lg={3} className="g-3 row ">
                        {produtos.length !== 0 && (
                            produtos.map((produto) =>
                            (
                                <Col key={produto.produtos[0].id} className="col mx-auto " >
                                    <Card className="card-container ">
                                        <Link to={`/produto/${produto.produtos[0].id}`}>
                                            <Card.Img variant="top" src={produto.produtos[0].image} />
                                        </Link>
                                        <Card.Body className="card-body">
                                            <Card.Title >{produto.produtos[0].titulo}</Card.Title>
                                            <Card.Text style={{ height: '6.50rem' }} title={produto.produtos[0].descricao} className="card-text">
                                                {produto.produtos[0].descricao >= 77 ? produto.produtos[0].descricao : produto.produtos[0].descricao.substring(0, 76) + "..."}
                                            </Card.Text>
                                            <Button variant="primary" >Ver detalhes</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                            )
                        )}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ProdutosPorCategoria;