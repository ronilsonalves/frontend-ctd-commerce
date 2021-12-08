const carrinhoReducer = (state, action) => {

    switch (action.type) {
        case "ADD_TO_CART":
            if (action.payload !== null && state.length > 0) {
                const newArray = [];
                state.forEach((produto) => {
                    if (action.payload.id !== produto.id) {
                        newArray.push(produto)
                    }
                })
                newArray.push(action.payload)
                return newArray

            } else if (state.length === 0) {
                return [...state, action.payload]
            }
            return state

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