// import { useParams, Link } from "react-router";
import { Helmet } from "react-helmet";
import { Col, Row, Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAxios from "../../hooks/useAxios";
import './style.scss';

const Produtos = () => {
    const produtos = useAxios();


    return (
        <>
            <Helmet>
                <title>CTD Commerce | Todos os produtos</title>
            </Helmet>
            <section id="produtos">


                <Container className="container">
                    <Row xs={1} md={3} className="g-4 row">
                        {produtos.length !== 0 && (
                            produtos.map((produto) =>
                            (
                                <Col key={produto.id} className="col" >
                                    <Card className="card-container ">
                                        <Link to={`/produto/${produto.id}`}>
                                            <Card.Img variant="top" src={produto.image} />
                                        </Link>
                                        <Card.Body className="card-body">
                                            <Card.Title >{produto.titulo}</Card.Title>
                                            <Card.Text style={{height:'6.50rem'}} title={produto.descricao} className="card-text"> 
                                            {produto.descricao >= 77 ? produto.descricao : produto.descricao.substring(0,76)+ "..."}
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