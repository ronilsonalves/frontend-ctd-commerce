import { useParams } from "react-router";
import { Helmet } from "react-helmet";
import "./style.scss";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import useAxios from "../../hooks/useAxios";

const DetalhesProduto = () => {
    const id = useParams();
    const detalhes = useAxios(`/${id.id}`);

    return (
        <>
            <Helmet title={`CTD Commerce | ${detalhes !== null ? detalhes.titulo : 'Produto não encontrado'}`}></Helmet>

            <section id="product-card">
                {detalhes !== null ? < Container >
                    <Row>
                        <Col sm={6}>
                            <Card.Img variant="top" src={detalhes.image} alt={detalhes.titulo} title={detalhes.titulo} />
                        </Col><Col sm={6}>
                            <Card.Body>
                                <Card.Title className="display-4" title={detalhes.titulo}>{detalhes.titulo}</Card.Title>
                                <Card.Title className="display-6">R$ {detalhes.preco}</Card.Title>
                                <Button variant="secondary" >Adicionar ao carrinho</Button>
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
                    : <h2>Produto não encontrado</h2>}
            </section>
        </>
    )
}

export default DetalhesProduto;