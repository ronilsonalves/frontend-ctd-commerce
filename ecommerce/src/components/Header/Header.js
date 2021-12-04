import React from "react";
import { Container, Navbar, Nav } from 'react-bootstrap'
import { useStateValue } from "../../StateProvider";
import { BsFillBasketFill } from 'react-icons/bs'
import { Link } from "react-router-dom";
import logo from '../Header/img/logo.png';



const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }] = useStateValue();
  return (
    <>

      <Navbar collapseOnSelect fixed="top"  bg="dark" variant="dark" expand="sm" >

        <Container className="container">

          <Navbar.Brand href="/"> <img className="logo"
            src={logo}
            alt="logo"
          />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='responsive-navbar-nav'className="justify-content-end " style={{textAlign: "center"}} />
          <Navbar.Collapse id='responsive-navbar-nav' className="justify-content-end" style={{textAlign: "center"}} >

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
