import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import api from "../../service/API";

const Produtos = () => {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        function getTodosOsProdutos() {
            try {
                const resProdutos = api.get()
                    .then((response) => {
                        setProdutos(response.data)
                    })
            } catch (error) {
                console.log(error);
            }
        }
    getTodosOsProdutos();
    }, []);
    
}

export default Produtos;