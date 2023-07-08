import { ProductType } from "../../products/products"
import { ActionTypes } from "./actions"

interface ProductsCartState {
    productsCart: ProductType[]
}

export function cartReducer(state: ProductsCartState, action: any) {

    switch(action.type) {

        case ActionTypes.ADD_NEW_PRODUCT_TO_CART: {
            return {
                ...state,
                productsCart: [...state.productsCart, action.payload.newProduct]
            }
        }

        case ActionTypes.UPDATE_CART_PRODUCT:
            return state
        case ActionTypes.REMOVE_CART_PRODUCT:
            return state
        default:
            return state

    }

}