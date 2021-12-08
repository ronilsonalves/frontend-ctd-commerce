import {createContext, useReducer, useEffect} from 'react';
import carrinhoReducer from '../reducers/carrinhoReducer';

export const CarrinhoContext = createContext();

const CarrinhoContextProvider = ({children})=>{
    const [produtosCarrinho, dispatch] = useReducer(carrinhoReducer,[],() => {
    
        const localData = localStorage.getItem('produtosCarrinho');
        return localData ? JSON.parse(localData):[];
    });

    const adicionarCarrinho = (produto) => dispatch({type: 'ADD_TO_CART', payload: produto});
    
    const removerDoCarrinho = (produto) => dispatch({type: 'REMOVE', payload: produto});

    useEffect(()=>{
        localStorage.setItem('produtosCarrinho', JSON.stringify(produtosCarrinho))
    }, [produtosCarrinho]);

    return(
        <CarrinhoContext.Provider value={{produtosCarrinho, adicionarCarrinho,removerDoCarrinho}}>
            {children}
        </CarrinhoContext.Provider>    
    )
}

export default CarrinhoContextProvider;