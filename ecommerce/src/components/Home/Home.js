import React from "react";
import {Carousel} from 'react-bootstrap';

const Home = () => {
    return (
      <>

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/dac23jyqr/image/upload/v1636934069/site/6DDB0214-66E3-45D4-BBAF-3B243D6036EF_k1fpkz.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/dac23jyqr/image/upload/v1636934069/site/6DDB0214-66E3-45D4-BBAF-3B243D6036EF_k1fpkz.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/dac23jyqr/image/upload/v1636934069/site/6DDB0214-66E3-45D4-BBAF-3B243D6036EF_k1fpkz.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</>
    
  );
};

export default Home;