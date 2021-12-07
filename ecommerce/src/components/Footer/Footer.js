import React from "react";
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';


<p className="d-flex">&copy; 2021 </p>

const Footer = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-center">
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="justify-content-center">



            <Nav.Link href="#home">Siga as nossas redes sociais: </Nav.Link>
            <Nav.Link href="#home"><BsGithub className="icon-footer" /></Nav.Link>
            <Nav.Link href="#home"><BsLinkedin className="icon-footer" />  </Nav.Link>
            <Nav.Link href="#home"><BsTwitter className="icon-footer" /></Nav.Link>

          </Nav>
        </Container>
      </Navbar>





    </>

  );
};






export default Footer;
