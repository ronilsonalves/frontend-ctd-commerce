import React from "react";
import './style.scss';
import RodapeLogo from "../../img/logo-svg.svg"


<p className="d-flex">&copy; 2021 </p>

const Footer = () => {
  return (
    <>

      <footer id="rodape" className="text-center text-lg-start">
        <div className="text-center text-white p-3">
          <img src={RodapeLogo} alt="CTD ECommerce Logo"></img>
          <p>Copyright ©2021 - <a className="text-white" href="/">CTD ECommerce</a>. Todos os direitos reservados.</p>
          Desenvolvido em React pelo Grupo 4 da Turma 4.
        </div>
      </footer>

    </>

  );
};

export default Footer;








