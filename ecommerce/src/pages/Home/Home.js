import React from "react";
import "./Home.scss";
import useAxios from "../../hooks/useAxios";
import { Col, Card, Button, Row } from 'react-bootstrap';
import Carousel from "react-bootstrap/Carousel";
import { Link } from 'react-router-dom';





function Home() {
    const produtos = useAxios();
    return (
        <>


            <div className="carrosel">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 home__image"
                            src="https://res.cloudinary.com/dac23jyqr/image/upload/v1638485715/ecommerce/banner_yfojmd.jpg"
                            alt="slide2"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 home__image"
                            src="https://res.cloudinary.com/dac23jyqr/image/upload/v1638486266/ecommerce/eletronicos_pw440b.jpg"
                            alt="slide3"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100 home__image"
                            src="https://res.cloudinary.com/dac23jyqr/image/upload/v1638486424/ecommerce/programa_dl7bac.jpg"
                            alt="slide5"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <Row xs={1} sm={2} md={3} lg={3} className="g-3 row ">
                <div className="categorias">

                    <div className="home__row">

                        {produtos.length !== 0 && (

                            produtos.map((produto) => (
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
                                            <Link to={`/produto/${produto.id}`}>
                                                <Button variant="primary" >Ver mais</Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )).slice(0, 3)
                        )



                        }
                    </div>

                </div>
            </Row>
            <div className="categorias">
                <h2>Mais Vendidos</h2>
            </div>


            <div className="carrosel">
                <Carousel>
                    <Carousel.Item>
                        <section className="carrosel">
                            {produtos.length !== 0 && (

                                produtos.map((produto) => (
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
                                                <Link to={`/produto/${produto.id}`}>
                                                    <Button variant="primary" >Ver mais</Button>
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )).slice(3, 6)
                            )



                            }
                        </section>
                    </Carousel.Item>
                    <Carousel.Item>
                        <section className="carrosel">
                            {produtos.length !== 0 && (

                                produtos.map((produto) => (
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
                                                <Link to={`/produto/${produto.id}`}>
                                                    <Button variant="primary" >Ver mais</Button>
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )).slice(0, 3)
                            )



                            }
                        </section>
                    </Carousel.Item>

                </Carousel>
            </div>


        </>

    );
}














export default Home;