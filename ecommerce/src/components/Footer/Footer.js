import React from "react";
import { Container, Navbar ,Nav} from 'react-bootstrap';
import{FaCcVisa, FaCcPaypal,FaCcApplePay} from 'react-icons/fa';
import{RiMastercardFill}  from 'react-icons/ri';
import {SiSamsungpay} from 'react-icons/si';
import{FaInstagramSquare,FaFacebookSquare,FaTwitterSquare} from 'react-icons/fa';



const Footer = () => {
  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Container className="container">
      
    <Nav className="d-flex justify-content-end" >
    <section className="col-md-4 col-sm-6 col-xs-12" >
      <Nav.Link href="#footer" className=" fw-bold">Formas de pagamento </Nav.Link>
      <Nav.Link href="#footer"><FaCcVisa className="text-white me-6"/></Nav.Link>
      <Nav.Link href="#footer"><RiMastercardFill className="text-white me-6"/></Nav.Link>
      <Nav.Link href="#footer"><FaCcPaypal className="text-white me-6"/></Nav.Link>
      <Nav.Link href="#footer"><FaCcApplePay className="text-white me-6"/></Nav.Link>
      <Nav.Link href="footer"><SiSamsungpay className="text-white me-6"/></Nav.Link>
      </section>

 
      <Nav className="d-flex justify-content-end"  >
      <section className="col-md-4 col-sm-6 col-xs-12" >
      <Nav.Link href="#footer" className=" fw-bold">Redes Sociais</Nav.Link>
      <Nav.Link href="#footer" ><FaInstagramSquare className="text-white me-6"/></Nav.Link>
      <Nav.Link href="#footer"><FaFacebookSquare  className="text-white me-6"/></Nav.Link>
      <Nav.Link href="#footer"><FaTwitterSquare  className="text-white me-6"/></Nav.Link>
      </section>
      

    </Nav>
    </Nav>
    </Container>
  </Navbar>



  
  
</>
    
  );
};
   
  

  

   
    export default Footer;




