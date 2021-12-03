import React from "react"
import "./style.scss"
import uniao from "../../Pages/SobreNos/img/uniao.png"

const Descricao = () => {
  return (

    <div class="row featurette" id="Descricao">
      <div class="col-md-7">
        <h2 class="featurette-heading" id="titulo">Sobre nós</h2>
        <p class="lead" id="texto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus officiis natus doloremque dolore. Eligendi aliquid sint ut nihil porro quidem iste laborum soluta consectetur fugiat mollitia explicabo, quo tempora. Repellat!</p>
      </div>
      <div class="col-md-1">
        <img class="featurette-image img-fluid mx-auto" id="foto" src={uniao} alt="matheus" />
      </div>
    </div>
  )
}

export default Descricao