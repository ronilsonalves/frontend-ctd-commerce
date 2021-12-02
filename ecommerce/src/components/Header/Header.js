import React from "react";
import {FaShoppingCart} from "react-icons/fa";
import { IconContext } from "react-icons";
import Routes from "../Rotas/routes";

// eslint-disable-next-line
const Header = () => {

  return (
    <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
          <strong>CTD COMERCE </strong>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 text-secondary">Home</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Produtos</a></li>
          <li><a href="sobrenos" class="nav-link px-2 text-white">Sobre Nós</a></li>
          
        </ul>

        
        <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "1.3em"  }}>
        <div class="text-end">
      
          <a href="#" alt="linkGitHub"> <FaShoppingCart/></a>
                
        </div>
        </IconContext.Provider>
      </div>
    </div>
  </header>
  )
}

export default Header;
