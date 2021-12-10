import React from "react";

function Projeto() {
    return (
        <>
            <img className="banner-sobrenos" style={{ width: 'auto'}} src="https://computerworld.com.br/wp-content/uploads/2019/12/as-habilidades-desenvolvedores-2020.jpg" alt="Banner pessoa digitando no computador"/>
            <div className="d-flex justify-content-center" id="Descricao">
                <div className="col-md-7">
                    <h2 className="featurette-heading" id="titulo">Projeto</h2>
                    <p className="lead mx-3" id="texto">
                        Neste projeto desenvolvemos um e-commerce para fins avaliativo
                        do curso CTD da Digital House, terceiro bimestre.
                        Esta aplicação Web foi desenvolvida em HTML5, SASS, React-Bosststrap e React.<br></br>
                        O Back-end foi desenvolvido em Java com o framework
                        Spring no modelo MVC e com o banco de dados MySQL.
                    </p>
                </div>
            </div>
        </>
    )
}


export default Projeto;




