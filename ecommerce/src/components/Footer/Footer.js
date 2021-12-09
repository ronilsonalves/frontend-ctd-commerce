import React from "react";
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom'



<p className="d-flex">&copy; 2021 </p>

const Footer = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-center">
          <Link to="/" className="navbar-brand">E-COMMERCE</Link>
          <Nav className="justify-content-center">



            <Link to="/" className="nav-link">Siga as nossas redes sociais</Link>
            <Link to="/" className="nav-link"><BsGithub className="icon-footer" /></Link>
            <Link to="/" className="nav-link"><BsLinkedin className="icon-footer" /></Link>
            <Link to="/" className="nav-link"><BsTwitter className="icon-footer" /></Link>

          </Nav>
        </Container>
      </Navbar>

    </>

  );
};






export default Footer;








