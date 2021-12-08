/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Projeto() {
    return (
        <>
            <img className="banner-sobrenos" src="https://computerworld.com.br/wp-content/uploads/2019/12/as-habilidades-desenvolvedores-2020.jpg" />
            <div className="d-flex justify-content-center" id="Descricao">
                <div class="col-md-7">
                    <h2 className="featurette-heading" id="titulo">Projeto</h2>
                    <div className="d-flex justify-content-center" id="texto">
                        Neste projeto desenvolvemos um e-commerce para fins avaliativo
                        do curso CTD da Digital House, terceiro bimestre.
                        Esta aplicação Web foi desenvolvida em HTML5, SASS, React-Bosststrap e React.<br></br>
                        O Back-end foi desenvolvido em Java com o framework
                        Spring no modelo MVC e banco de dados MySQL.
                    </div>
                </div>
            </div>
        </>

    )
}


export default Projeto;




