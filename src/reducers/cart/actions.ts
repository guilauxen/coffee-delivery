import { ProductType } from "../../products/products"

export enum ActionTypes {
    ADD_NEW_PRODUCT_TO_CART = "ADD_NEW_PRODUCT_TO_CART",
    UPDATE_CART_PRODUCT = "UPDATE_CART_PRODUCT",
    REMOVE_CART_PRODUCT = "REMOVE_CART_PRODUCT"
}

export function addNewProductToCartAction(newProduct: ProductType) {
    return {
        type: ActionTypes.ADD_NEW_PRODUCT_TO_CART,
        payload: {
            newProduct
        }
    }
}

export function removeCartProductAction(productInTheCart: ProductType) {
    return {
        type: ActionTypes.REMOVE_CART_PRODUCT,
        payload: {
            productInTheCart
        }
    }
}