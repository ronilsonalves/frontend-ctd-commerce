import React from "react";
import {Carousel,Container,Navbar,Row,Card,Col} from 'react-bootstrap';
import './Home.scss';



const Home = () => {
    return (
      <>

<Carousel>

  <Carousel.Item className="d-flex flex-row w-50 "> 
    <img
      className="d-flex flex-row w-50 "
      src="https://res.cloudinary.com/dac23jyqr/image/upload/v1638384699/ecommerce/alexa_iz2qdk.jpg"
      alt="Second slide"
    />
    <img
      className="d-flex flex-row w-50 "
      src="https://res.cloudinary.com/dac23jyqr/image/upload/v1638384699/ecommerce/kindle_qracmo.jpg"
      alt="Second slide"
    />
    <img
      className="d-flex flex-row w-50 "
      src="https://res.cloudinary.com/dac23jyqr/image/upload/v1638384699/ecommerce/kindle_qracmo.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="d-flex flex-row w-50"> 
    <img
      className="d-flex flex-row w-50"
      src="https://res.cloudinary.com/dac23jyqr/image/upload/v1638385118/ecommerce/geladeira_lzg5vm.jpg"
      alt="Second slide"
    />
    <img
      className="d-flex flex-row w-50"
      src="https://res.cloudinary.com/dac23jyqr/image/upload/v1638385106/ecommerce/liquidificador_nujfud.jpg"
      alt="Second slide"
    />
    <img
      className="d-flex flex-row w-50"
      src="https://res.cloudinary.com/dac23jyqr/image/upload/v1638385106/ecommerce/microondas_cl5fdf.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<br></br>
<Container>
  <Navbar expand="lg" variant="light" bg="light">
    <Container>
      <Navbar.Brand href="#">Pagamento Rápido e Seguro</Navbar.Brand>
    </Container>
  </Navbar>
</Container>
<br></br>
<Container>
  <Navbar expand="lg" variant="light" bg="light">
    <Container>
      <Navbar.Brand href="#">Compre por Categoria</Navbar.Brand>
    </Container>
  </Navbar>
</Container>
<br></br>


<Row xs={1} md={2} className="g-4">
  {Array.from({ length: 2 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
<br></br>
<Container>
  <Navbar expand="lg" variant="light" bg="light">
    <Container>
      <Navbar.Brand href="#">Produtos Mais Vendidos</Navbar.Brand>
    </Container>
  </Navbar>
</Container>
<br></br>



<Row xs={1} md={2} className="g-4">
  {Array.from({ length: 2 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

</>
    
  );
};

export default Home;
