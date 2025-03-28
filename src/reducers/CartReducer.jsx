let initialState = []

const CartReducer = (state = initialState, action) => {
    switch (action?.type) {
        case 'GET_CART':
            return [...state]

        case 'ADD_TO_CART':
            const itemIndex = state.findIndex(item => item._id === action.payload._id)
            if (itemIndex === -1) {
                return [...state, { ...action.payload, quantity: 1 }]
            } else {
                return state.map((item, index) => index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item)
            }
        case 'REMOVE_FROM_CART':
            return state.filter(item => item?._id !== action?.payload?._id)
        case 'INCREASE_QUANTITY':
            return state.map(item => item._id === action.payload._id ? { ...item, quantity: item.quantity + 1 } : item)
        case 'DECREASE_QUANTITY':
            const selectedItem = state.find(item => item._id === action.payload._id)
            if (selectedItem && selectedItem?.quantity === 1) {
                return state.filter(items => items._id !== selectedItem._id)
            } else {
                return state.map(item => item._id === action.payload._id ? { ...item, quantity: item.quantity - 1 } : item)
            }
        default:
            return state
    }
}

export default CartReducer