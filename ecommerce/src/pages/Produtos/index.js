import { useParams, Link } from "react-router";
import { Helmet } from "react-helmet";
import { Container, Col, ListGroup, Button } from 'react-bootstrap';

import useAxios from "../../hooks/useAxios";

const Produtos = () => {
    const produtos = useAxios();


    return (
        <>
            <Helmet>
                <title>CTD Commerce | Todos os produtos</title>
            </Helmet>
            <section id="produtos">
                <Container className="my-3 text-center">
                    {produtos.length !== 0 && (
                        produtos.map((produto) =>
                        (
                            <Col key={produto.id}><p>
                                {console.log(produto)}
                                Nome: {produto.titulo}, Preço: {produto.preco}, Desc: {produto.descricao}, {produto.categoria.nome}
                            </p>
                            </Col>

                        ))
                    )}
                </Container>

            </section>
        </>
    )
}

export default Produtos;