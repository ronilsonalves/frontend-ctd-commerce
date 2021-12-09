import { useParams } from "react-router";
import { Helmet } from "react-helmet";
import { Col, Row, Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchBox from "../../components/SearchBox";

import '../Produtos/style.scss';

import useAxios from "../../hooks/useAxios";

const SearchResults = () => {
    const byName = useParams();
    const resultadoPesquisa = useAxios(`/by/${byName.byname}`);


    return (
        <>
            <Helmet title={`CTD Commerce | ${resultadoPesquisa.length !== 0 ? 'Busca por ' + byName.byname : 'Não foram encontrados produtos'}`}></Helmet>
            <section id="produtos">
                <SearchBox />
                <h3 className="display-5 text-center my-3 py-3">Confira o resultado da sua pesquisa</h3>
                {resultadoPesquisa.length !== 0 ? <Container className="container">
                    <Row xs={1} sm={2} md={3} lg={3} className="g-3 row ">
                        {resultadoPesquisa.length !== 0 && (
                            resultadoPesquisa.map((produto) =>
                            (
                                <Col key={produto.id} className="col mx-auto " >
                                    <Card className="card-container ">
                                        <Link to={`/produto/${produto.id}`}>
                                            <Card.Img variant="top" src={produto.image} />
                                        </Link>
                                        <Card.Body className="card-body">
                                            <Card.Title >{produto.titulo}</Card.Title>
                                            <Card.Text style={{ height: '6.50rem' }} title={produto.descricao} className="card-text">
                                                {produto.descricao <= 77 ? produto.descricao : produto.descricao.substring(0, 76) + "..."}
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
                    : <h3 className="display-6">Não foram encontrados produtos para o termo " <b>{byName.byname}</b> " buscado</h3>}
            </section>
        </>
    )

}

export default SearchResults;