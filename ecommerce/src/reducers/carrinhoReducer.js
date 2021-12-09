const carrinhoReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TO_CART':
            const jaExiste = state.filter(produto => (
                produto.id === action.payload.id
            ));

            if (!jaExiste.length) {
                return [...state, action.payload];
            } else {
                console.log(action.payload.quantidade)
                const novoEstado = state.map((produto) => {
                    if (produto.id === action.payload.id) {
                        produto.quantidade = action.payload.quantidade
                    }
                    return produto
                })

                return novoEstado;
            }

        case 'REMOVE':
            let estadoAtual = [...state]
            const indice = state.findIndex(
                (item) => item.id === action.payload.id
            )

            if (indice >= 0) {
                estadoAtual.splice(indice, 1)
                return estadoAtual
            } else {
                return state
            }

        case 'CLEAR':
            return state = [];
        default:
            return state;
    }
}

export default carrinhoReducer;