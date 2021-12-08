import React from "react";
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BsFillBasketFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
import logo from '../img/logo.png';
import './Header.scss';
const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" bg="dark" variant="dark" expand="sm" >

        <Container className="container">
        <Navbar.Brand to="/" className="navbar-brand">
            <img src={logo} alt="logo" className="logo" />
          </Navbar.Brand>


          <Navbar.Toggle aria-controls='responsive-navbar-nav' className="justify-content-end " style={{ textAlign: "center" }} />
          <Navbar.Collapse id='responsive-navbar-nav' className="justify-content-end" style={{ textAlign: "center" }} >

            <Nav>
              <Nav.Link>
                <Link to='/home' style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/produtos' style={{ textDecoration: 'none', color: 'white' }}>Produtos</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/sobrenos' style={{ textDecoration: 'none', color: 'white' }}>Sobre nós</Link>
              </Nav.Link>

              <Link to="/carinho" className="d-right"><BsFillBasketFill className="carrinho"></BsFillBasketFill></Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



    </>

  );
};

export default Header;
