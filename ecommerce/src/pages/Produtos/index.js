// import { useParams, Link } from "react-router";
import { Helmet } from "react-helmet";
import { Col, Row, Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAxios from "../../hooks/useAxios";

const Produtos = () => {
    const produtos = useAxios();


    return (
        <>
            <Helmet>
                <title>CTD Commerce | Todos os produtos</title>
            </Helmet>
            <section id="produtos">
                <Container >
                    <Row xs={1} md={3} className="g-4">
                        {produtos.length !== 0 && (
                            produtos.map((produto) =>
                            (
                                <Col key={produto.id}>
                                    <Card >
                                        <Link to={`/produto/${produto.id}`}>
                                            <Card.Img variant="top" src={produto.image} />
                                        </Link>
                                        <Card.Body>
                                            <Card.Title >{produto.titulo}</Card.Title>
                                            <Card.Text style={{height:'6rem'}} title={produto.descricao} > 
                                            {produto.descricao >= 77 ? produto.descricao : produto.descricao.substring(0,76)+ "..."}
                                            </Card.Text>
                                            <Button variant="primary" className="mx-auto">Ver detalhes</Button>
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