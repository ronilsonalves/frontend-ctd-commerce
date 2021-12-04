// import { useParams, Link } from "react-router";
import { Helmet } from "react-helmet";
import { Col, Row, Button, Card, Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAxios from "../../hooks/useAxios";
import './style.scss';

const Produtos = () => {
    const produtos = useAxios();
    const categorias = useAxios('categoria');
    let listaDeCategorias = []; 
    
    categorias.map((categoria) => {
      return listaDeCategorias.push(categoria.nome)
    })

    let duplicatas = [...new Set(listaDeCategorias)]
    
    return (
        <>
            <Helmet>
                <title>CTD Commerce | Todos os produtos</title>
            </Helmet>
            <section id="produtos">
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
                                     {duplicatas.length !== 0 && (
                                         duplicatas.map((categoria) =>(
                                             <NavDropdown.Item key={categoria}><Link to={`/produtos/${categoria}`}>{categoria}</Link></NavDropdown.Item>
                                             
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
                                <Col key={produto.id} className="col mx-auto " >
                                    <Card className="card-container ">
                                        <Link to={`/produto/${produto.id}`}>
                                            <Card.Img variant="top" src={produto.image} />
                                        </Link>
                                        <Card.Body className="card-body">
                                            <Card.Title >{produto.titulo}</Card.Title>
                                            <Card.Text style={{ height: '6.50rem' }} title={produto.descricao} className="card-text">
                                                {produto.descricao >= 77 ? produto.descricao : produto.descricao.substring(0, 76) + "..."}
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

export default Produtos;