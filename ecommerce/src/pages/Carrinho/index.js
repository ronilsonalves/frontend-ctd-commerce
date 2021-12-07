import {CarrinhoContext} from '../../contexts/Carrinho';
import {useContext} from 'react';


const Carrinho = () => {
    const { adicionarCarrinho} = useContext(CarrinhoContext);
    const { removerDoCarrinho} = useContext(CarrinhoContext);


}

