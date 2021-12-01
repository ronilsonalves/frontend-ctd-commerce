import React from "react";
import { Container, Navbar ,Nav} from 'react-bootstrap';
const Header = () => {
  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#produto">Produto</Nav.Link>
      <Nav.Link href="#sobrenos">Sobre Nós</Nav.Link>
      <Nav.Link href="#carrinho">Carrinho</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

  
  
</>
    
  );
};

export default Header;
