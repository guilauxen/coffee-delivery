import { ProductType } from "../../products/products"
import { ActionTypes } from "./actions"

interface ProductsCartState {
    productsCart: ProductType[]
}

export function cartReducer(state: ProductsCartState, action: any) {

    switch(action.type) {

        case ActionTypes.ADD_NEW_PRODUCT_TO_CART:

            return {
                ...state,
                productsCart: [...state.productsCart, action.payload.newProduct]
            }
   
        case ActionTypes.REMOVE_CART_PRODUCT:
            
            const productsWithoutDeleteOne = state.productsCart.filter((product) => {
                return product.id != action.payload.productInTheCart.id
            })

            return {
                ...state,
                productsCart: productsWithoutDeleteOne
            }
  
        default:
            return state

    }

}