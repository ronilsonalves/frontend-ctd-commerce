import React from "react";
import { Container, Navbar ,Nav} from 'react-bootstrap'
import { useStateValue } from "../../StateProvider";
import{BsFillBasketFill} from 'react-icons/bs'
import { Link } from "react-router-dom";



const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }] = useStateValue();
  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#ctd">CTD COMMERCE</Navbar.Brand>
    <Nav className="me-auto">
    
      <Nav.Link>
      <Link to='/home'style={{ textDecoration: 'none', color:'white' }}>Home</Link>
      </Nav.Link>
      <Nav.Link>
      <Link to='/produto'  style={{ textDecoration: 'none', color:'white' }}>Produtos</Link>
      </Nav.Link>
      <Nav.Link>
      <Link to='/sobrenos' style={{ textDecoration: 'none', color:'white' }}>Sobre nós</Link>
      </Nav.Link>
      <div class="position-absolute top-0 start-50 translate-middle-x">
      <Nav.Link href="#carrinho" className="d-right"><BsFillBasketFill className="carrinho"></BsFillBasketFill></Nav.Link>       
      </div>
    </Nav>
    </Container>
  </Navbar>

  
  
</>
    
  );
};

export default Header;
