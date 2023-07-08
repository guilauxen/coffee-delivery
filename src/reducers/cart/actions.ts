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

export function updateCartProductAction() {
    return {
        type: ActionTypes.UPDATE_CART_PRODUCT
    }
}

export function removeCartProductAction() {
    return {
        type: ActionTypes.REMOVE_CART_PRODUCT
    }
}