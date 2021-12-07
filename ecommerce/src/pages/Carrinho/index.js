import {CarrinhoContext} from '../../contexts/Carrinho';
import {useContext} from 'react';


const Carrinho = () => {
    const { produtosNoCarrinho} = useContext(CarrinhoContext);
}

