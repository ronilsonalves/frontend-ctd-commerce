import React from "react"
import "./style.scss"
import samuel from "./img/samuca.jpeg"
import patispro from "./img/patyspro.jpeg"
import henrique from "./img/henrique.jpeg"
import patyruffino from "./img/patyruffino.jpeg"
import ronilson from "./img/ronilson.jpeg"
import matheus from "./img/matheus.jpeg"
import { BsGithub, BsLinkedin } from 'react-icons/bs';


const Cards = () => {
  return (
    <div class="container caixa-fundadores">
        <h2>Equipe do Projeto</h2>
        <ul id="lista-fundadores">
          <p class="fundador">
            <img src={henrique} alt="Henrique"/>
            <div>
              <strong>Henrique Tebet</strong>                          
              <p>Github: @henriquetebet</p>
              <a href="https://github.com/HenriqueTebet"><BsGithub/></a> <a href="https://www.linkedin.com/in/henrique-tebet-31bb5315b/"><BsLinkedin/></a>
            </div>
          </p>
          <p class="fundador" >
            <img src={patyruffino} alt="Patricia"/>
            <div>
              <strong>Patricia Ruffino</strong>          
              <p>Github: @PatriciaRuffino</p>
              <a href="https://github.com/PatriciaRuffino"><BsGithub/></a> <a href="https://www.linkedin.com/in/patriciaruffino/"><BsLinkedin/></a>
            </div>
          </p>
          <p class="fundador" >
            <img src={patispro} alt="Patricia"/>
            <div>
              <strong>Patricia Sprovieri</strong>              
              <p>Github: @patyspro</p>
              <a href="https://github.com/patyspro"><BsGithub/></a> <a href="https://www.linkedin.com/in/patyspro/"><BsLinkedin/></a>
            
            </div>
          </p>
          <p class="fundador" >
            <img src={matheus} alt="Matheus"/>
            <div>
              <strong>Matheus Augusto</strong>            
              <p>Github: @msilvabr</p>
              <a href="https://github.com/msilvabr1"><BsGithub/></a> <a href="https://www.linkedin.com/in/matheus-silva-204512209/"><BsLinkedin/></a>
            </div>
          </p>
          <p class="fundador" >
            <img src={samuel} alt="Samuel"/>
            <div>
              <strong>Samuel Xavier</strong>            
              <p>Github: @SamuelFXavier</p>
              <a href="https://github.com/SamuelFXavier"><BsGithub/></a> <a href="https://www.linkedin.com/in/samuel-xavier-60b757a9/"><BsLinkedin/></a>                  
            </div>
          </p>
          <p class="fundador" >
            <img src={ronilson} alt="Ronilson"/>
            <div>
              <strong>Ronilson Alves</strong>            
              <p>Github: @ronilsonalves</p>
              <a href="https://github.com/ronilsonalves"><BsGithub/></a> <a href="https://www.linkedin.com/in/ronilsonalves/"><BsLinkedin/></a>                     
            </div>
          </p>
        </ul>
      </div>

  )
}

export default Cards;