import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../../service/API";

const TestApi = () => {
    
    const [produtos, setProdutos] = useState([]);

    const exibirProdutos = () => {

        try {
            const resposta = api.get()
                .then((response) => {
                    setProdutos(response.data)
                });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        exibirProdutos();
        
    },[])

    return(
        <>
            {produtos.length !== 0 && (
                produtos.map((produto) =>
                
                     (
                        <p key={produto.id}>
                            {console.log(produto)}
                            Nome: {produto.titulo}, Preço: {produto.preco}, Desc: {produto.descricao}, {produto.categoria.nome}
                        </p>
                    )
                )
            )}
        </>
    )
}

export default TestApi;