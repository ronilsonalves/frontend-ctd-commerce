import React from "react";
import useAxios from "../../hooks/useAxios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Helmet } from "react-helmet";
import SearchBox from "../../components/SearchBox";


import './style.scss';

const ProdutosPorCategoria = () => {

    const { category } = useParams();
    const produtos = useAxios(`categoria/${category}`);
    const categorias = useAxios('categoria');

    let categoriaSelecionada = [];

    produtos.map((categoria) => {
        return categoriaSelecionada.push(categoria.nome)
    })

    let tituloSelecionado = [...new Set(categoriaSelecionada)]

    let todasCategorias = [];

    categorias.map((categoria) => {
        return todasCategorias.push(categoria.nome)
    })

    let tituloCategoria = [...new Set(todasCategorias)]
    
    return (
        <>
            <Helmet title={`CTD Commerce | ${produtos !== null ? tituloSelecionado : 'Categoria não encontrado'}`}></Helmet>
            <section id="produtos">
                <SearchBox />
                <Container className="container-nav">
                    <Navbar variant="dark" bg="dark" expand="lg">
                        <Container fluid>
                            <Navbar.Brand href="#home">Filtro por categorias</Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbar-dark-example " className="justify-content-end" />
                            <Navbar.Collapse id="navbar-dark-example" className="justify-content-end">
                                <Nav>
                                    <NavDropdown
                                        id="nav-dropdown-dark-example"
                                        title="Categorias"
                                        menuVariant="dark"
                                    >
                                        {tituloCategoria.length !== 0 && (
                                            tituloCategoria.map((categoria) => (
                                                <NavDropdown.Item key={categoria}><Link to={`/produtos/categoria/${categoria}`}>{categoria}</Link></NavDropdown.Item>
                                            ))
                                        )}
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Container>
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
                                            <Link to={`/produto/${produto.produtos[0].id}`}><Button variant="primary" >Ver detalhes</Button></Link>
                                        </Card.Body>
                                    </Card>
                                    </Col>
                            ))
                            )}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ProdutosPorCategoria;