import React from "react";
import { Container, Navbar ,Nav} from 'react-bootstrap';


<p className="d-flex">&copy; 2021 </p>
const Footer = () => {
  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#produto"></Nav.Link>
      <Nav.Link href="#sobrenos"></Nav.Link>
      <Nav.Link href="#carrinho"></Nav.Link>
    </Nav>
    </Container>
  </Navbar>

  
  
</>
    
  );
};
   
  

  

   
    export default Footer;