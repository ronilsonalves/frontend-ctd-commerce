import React from "react";
import './Header.scss';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BsFillBasketFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" bg="dark" variant="dark" expand="sm" >

        <Container className="container">
          <Link to="/" className="navbar-brand">E-commerce</Link>
          {/*  <Navbar.Brand href="/">Ecommerce</Navbar.Brand> */}


          <Navbar.Toggle aria-controls='responsive-navbar-nav' className="justify-content-end " style={{ textAlign: "center" }} />
          <Navbar.Collapse id='responsive-navbar-nav' className="justify-content-end" style={{ textAlign: "center" }} >

            <Nav>
              <Nav.Link>
                <Link to='/home' style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/produto' style={{ textDecoration: 'none', color: 'white' }}>Produtos</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/sobrenos' style={{ textDecoration: 'none', color: 'white' }}>Sobre nós</Link>
              </Nav.Link>

              <Link to="/" className="d-right"><BsFillBasketFill className="carrinho"></BsFillBasketFill></Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



    </>

  );
};

export default Header;
