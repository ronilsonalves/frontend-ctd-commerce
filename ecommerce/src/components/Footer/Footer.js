import React from "react";
import { Container, Navbar, Nav } from 'react-bootstrap';
import{FaCcVisa, FaCcPaypal,FaCcApplePay} from 'react-icons/fa';
import{RiMastercardFill}  from 'react-icons/ri';
import {SiSamsungpay} from 'react-icons/si';
import{FaInstagramSquare,FaFacebookSquare,FaTwitterSquare} from 'react-icons/fa';
import { Link } from 'react-router-dom'
import logo  from '../img/logo.png';
import './Footer.scss';


const Footer = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-center">
          <Navbar.Brand to="/" className="navbar-brand">
            <img src={logo} alt="logo" className="navbar-brand" />
          </Navbar.Brand>
         
        


          <section className="col-md-4 col-sm-6 col-xs-12" >
            <Link to="/" className="nav-link text-white">Formas de Pagamento</Link>
            <Nav.Link href="#footer"><FaCcVisa className="text-white me-6" size={'2rem' }  /></Nav.Link>
      <Nav.Link href="#footer"><RiMastercardFill className="text-white me-6" size={'2rem' }  /></Nav.Link>
      <Nav.Link href="#footer"><FaCcPaypal className="text-white me-6"size={'2rem' } /></Nav.Link>
      <Nav.Link href="#footer"><FaCcApplePay className="text-white me-6" size={'2rem' }/></Nav.Link>
      <Nav.Link href="#footer"><SiSamsungpay className="text-white me-6" size={'2rem' } /></Nav.Link>
      </section>

 
      <Nav className="d-flex justify-content-end"  >
      <section className="col-md-4 col-sm-6 col-xs-12" >
      <Nav.Link href="#footer" className="nav-link text-white">Redes Sociais</Nav.Link>
      <Nav.Link href="#footer" ><FaInstagramSquare className="text-white me-6" size={'2rem' } /></Nav.Link>
      <Nav.Link href="#footer"><FaFacebookSquare  className="text-white me-6" size={'2rem' } /></Nav.Link>
      <Nav.Link href="#footer"><FaTwitterSquare  className="text-white me-6" size={'2rem' } /></Nav.Link>
      </section>
      

      </Nav>
      </Container>
      </Navbar>

    </>

  );
};






export default Footer;  










