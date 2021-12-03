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
    <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#produto">Produto</Nav.Link>
<<<<<<< HEAD
      {/* <Nav.Link href="/sobrenos">Sobre Nós</Nav.Link> */}
      <Link to='/sobrenos'>Sobre nós</Link>
=======
      <Nav.Link href="/sobrenos">Sobre Nós</Nav.Link>
>>>>>>> aa0c2953ac2dd1e7823079af5e24a9510b4f5245
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
