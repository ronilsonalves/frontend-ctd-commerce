import React from "react";
import { Container, Navbar ,Nav} from 'react-bootstrap'
import { useStateValue } from "../../StateProvider";
const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }] = useStateValue();
  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#ctd">CTD COMMERCE</Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link href="#home">Home</Nav.Link>
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
