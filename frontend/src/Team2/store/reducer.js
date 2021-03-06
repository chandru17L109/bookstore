import * as actions from '../action/action';

let initialState = {
    books: [], orderSummary: {}, address: [],
    cart: [], selectedAddress: {}, orders: [], amount: 0, coupon: {
        couponcode: "",
        description: "",
        offeramount: 0,
    }
}

const BookReducerCart = (state = initialState, action) => {
    switch (action.type) {


        case actions.ON_CART_LOAD: return { ...state, cart: action.payload }
        case actions.ON_DELETE_ITEM: return { ...state, cart: action.payload }
        case actions.ON_MOVE_ITEM: return { ...state, cart: action.payload }
        case actions.ADJUST_ITEM_QTY: return { ...state, cart: action.payload }
        case actions.ON_AMOUNT: return { ...state, amount: action.payload }


        case actions.ON_WISH_LOAD: return { ...state, books: action.payload }
        case actions.ON_ADD_CART_WISH: return { ...state, books: action.payload }

        case actions.ON_ADDRESS_LOAD: return { ...state, address: action.payload }
        case actions.ON_DELETE_ADDRESS: return { ...state, address: action.payload }
        case actions.ON_ADD_ADDRESS: return { ...state, address: action.payload }
        case actions.ON_EDIT_ADDRESS: return { ...state, address: action.payload }


        case actions.ORDER_SUMMARY: return { ...state, orderSummary: action.payload }

        case actions.DELIVERY_ADDRESS: return { ...state, selectedAddress: action.payload }

        case actions.ON_CONFIRM_PAYMENT: return { ...state, orders: action.payload }
        case actions.ON_APPLY_COUPON: return { ...state, coupon: action.payload }

        default: return { ...state }
    }
}
export default BookReducerCart;




