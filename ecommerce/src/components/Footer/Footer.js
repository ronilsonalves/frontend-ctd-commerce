import React from "react";
import iconfacebook from '../Footer/img/facebook.png'
import iconinstagram from '../Footer/img/instagram.png'
import icongmail from '../Footer/img/gmail.png'



const Footer = (temaEscuro) => {
    
  return (
    <>
      <footer id="footer" className={`d-flex flex-wrap justify-content-between align-items-stretch py-3 border-top text-${temaEscuro ? 'light' : 'dark'} bg-${temaEscuro ? 'dark' : 'light'}`}>
       
    {/* <div className="container-fluid d-flex justify-content-md-start align-items-stretch  " > */}

    <div className="container-md d-left my-3">
      <a href="#" alt= "facebook" className="me-3">
      <img src={iconfacebook} alt="git" className="me-2"/></a> 
      
      
      <a href="#" alt="instagram">
      <img src={iconinstagram} alt="instagram" className="me-2"/></a>

      <a href = "#">
      <img src={icongmail} alt="gmail" className="me-2"/></a>
   
      {/* </div> */}
      </div>
      <div className="container-md  my-3">
      <p className="d-flex">&copy; 2021 - Henrique Tebet, Matheus Augusto, Patrícia Sprovieri, Ronilson Alves e Samuel Xavier </p>
      </div>
      
      
 

  </footer>
  </>
  )
  }
  export default Footer;