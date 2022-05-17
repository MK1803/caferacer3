const initState = {
    products: [],
    basket: []
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case "ALL":
            return {
                ...state, products: action.payload

            };
        case "ADD":
            return {
                ...state, basket: [...state.basket, state.products.find((e) => e.id === action.payload)]
            };

        case "DEL":
            return {
                ...state, basket: [...state.basket.filter((e) => e.id !== action.payload)]

            };

        case "INC":
            return {
                ...state, basket: [...state.basket.map(e => {
                    if (e.id === action.payload) {
                        e.count += 1;
                    }
                    return e;
                })]

            };
        case "DEC":
            return {
                ...state, basket: [...state.basket.map(e => {
                    if (e.id === action.payload) {
                        e.count -= 1;
                    }
                    return e;
                })]

            };


        default:
            return state
    }
}