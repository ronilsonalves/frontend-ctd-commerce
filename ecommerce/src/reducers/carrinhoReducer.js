export const estadoInicial = {
    cestaDeCarrinho:[]
}

export const carrinhoReducer =  (state, action) =>{

    switch (action.type) {
        case "ADD_TO_CART":
            return{
                ...state,cestaDeCarrinho:action.payload
            }
            // return[...state,action.payload]
        case 'REMOVE':
            let estadoAtual = [...state.cestaDeCarrinho]
            const indice = state.cestaDeCarrinho.findIndex(
                (item) => item.id === action.id
            )

            if(indice >= 0 ){
                estadoAtual.splice(indice, 1)
            }else{
                console.log("não tem produto")
            }    
            return {
                ...state, cestaDeCarrinho:estadoAtual
            }
                
        default:
            return state;
    }
}