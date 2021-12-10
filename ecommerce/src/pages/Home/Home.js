import React from "react";
import { Helmet } from "react-helmet";
import "./Home.scss";
import useAxios from "../../hooks/useAxios";
import { Col, Card, Button } from 'react-bootstrap';
import Carousel from "react-bootstrap/Carousel";
import { Link } from 'react-router-dom';





function Home() {
    const produtos = useAxios();
    return (
        <>
            <Helmet>
                <title>CTD Commerce | Home</title>
            </Helmet>

            <section id="home-page">
                <div className="home">
                    <div className="home__container">
                        <div className="home__image">
                            <Carousel>
                                <Carousel.Item>
                                    <img

                                        className="d-block w-100 home__image"
                                        src="https://res.cloudinary.com/dac23jyqr/image/upload/v1638486266/ecommerce/eletronicos_pw440b.jpg"
                                        alt="slide1"
                                    />
                                </Carousel.Item>
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
                                        src="https://res.cloudinary.com/dac23jyqr/image/upload/v1638486424/ecommerce/programa_dl7bac.jpg"
                                        alt="slide3"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>

                        <div className="categorias">

                            <section className="carrosel">
                                {produtos.length !== 0 && (

                                    produtos.map((produto, index) => (
                                        <Col key={produto.id} className={`mx-auto ${index === 1 ? "d-none d-sm-block" : index === 2 ? "d-none d-md-block" : ""}`} >
                                            <Card className="card-container ">
                                                <Link to={`/produto/${produto.id}`}>
                                                    <Card.Img variant="top" src={produto.image} />
                                                </Link>
                                                <Card.Body className="card-body">
                                                    <Card.Title >{produto.titulo}</Card.Title>
                                                    <Card.Text style={{ height: '6.50rem' }} title={produto.descricao} className="card-text">
                                                        {produto.descricao >= 77 ? produto.descricao : produto.descricao.substring(0, 76) + "..."}
                                                    </Card.Text>
                                                    <Card.Title id="card-preco" className="display-6">R${produto.preco} </Card.Title>
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
                        </div>

                        <div>
                            <h2 className="text-center">Mais Vendidos</h2>
                            <Carousel>
                                <Carousel.Item>
                                    <section className="carrosel">
                                        {produtos.length !== 0 && (

                                            produtos.map((produto, index) => (
                                                <Col key={produto.id} className={`mx-auto ${index === 7 ? "d-none d-sm-block" : index === 8 ? "d-none d-md-block" : ""}`} >
                                                    <Card className="card-container ">
                                                        <Link to={`/produto/${produto.id}`}>
                                                            <Card.Img variant="top" src={produto.image} />
                                                        </Link>
                                                        <Card.Body className="card-body">
                                                            <Card.Title >{produto.titulo}</Card.Title>
                                                            <Card.Text style={{ height: '6.50rem' }} title={produto.descricao} className="card-text">
                                                                {produto.descricao >= 77 ? produto.descricao : produto.descricao.substring(0, 76) + "..."}
                                                            </Card.Text>
                                                            <Card.Title id="card-preco" className="display-6">R${produto.preco} </Card.Title>
                                                            <Link to={`/produto/${produto.id}`}>
                                                                <Button variant="primary" >Ver mais</Button>
                                                            </Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            )).slice(6, 9)
                                        )



                                        }
                                    </section>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <section className="carrosel">
                                        {produtos.length !== 0 && (

                                            produtos.map((produto, index) => (
                                                <Col key={produto.id} className={`mx-auto ${index === 4 ? "d-none d-sm-block" : index === 5 ? "d-none d-md-block" : ""}`} >
                                                    <Card className="card-container ">
                                                        <Link to={`/produto/${produto.id}`}>
                                                            <Card.Img variant="top" src={produto.image} />
                                                        </Link>
                                                        <Card.Body className="card-body">
                                                            <Card.Title >{produto.titulo}</Card.Title>
                                                            <Card.Text style={{ height: '6.50rem' }} title={produto.descricao} className="card-text">
                                                                {produto.descricao >= 77 ? produto.descricao : produto.descricao.substring(0, 76) + "..."}
                                                            </Card.Text>
                                                            <Card.Title id="card-preco" className="display-6">R${produto.preco} </Card.Title>
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

                            </Carousel>



                        </div>
                    </div>
                </div>

            </section>
        </>

    );
}

export default Home;