 const carrinhoReducer =  (state, action) =>{

    switch (action.type) {
        case "ADD_TO_CART":
            return [...state,action.payload]
            
        case 'REMOVE':
            let estadoAtual = [...state]
            const indice = state.findIndex(
                (item) => item.id === action.payload.id
            )

            if(indice >= 0 ){
                estadoAtual.splice(indice, 1)
                 return estadoAtual
            }else{
               return state
            }    
                
        default:
            return state;
    }
}

export default carrinhoReducer;