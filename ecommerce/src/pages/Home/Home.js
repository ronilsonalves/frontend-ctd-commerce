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
                            <h2>Eletrônicos</h2>

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
                        </div>

                        <div className="home__row">
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

                        <div className="categorias">
                            <h2>Eletrodomésticos</h2>

                        </div>

                        <div className="home__row">


                        </div>
                        <div className="categorias">
                            <h2>Mais Vendidos</h2>
                        </div>


                        <Carousel>
                            <Carousel.Item>
                                <section>
                                    <section className="carrosel">

                                    </section>
                                </section>
                            </Carousel.Item>
                            <Carousel.Item>
                                <section className="carrosel">

                                </section>

                            </Carousel.Item>

                        </Carousel>
                    </div>
                </div>

            </section>
        </>

    );
}

export default Home;