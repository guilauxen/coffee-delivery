import { ReactNode, createContext, useReducer } from "react"
import { ProductType } from "../products/products"
import { cartReducer } from "../reducers/cart/reducer"
import { addNewProductToCartAction, removeCartProductAction } from "../reducers/cart/actions"

interface CartContextProviderProps {
    children: ReactNode
}

interface CartContextType {
    productsCart: ProductType[]
    amountProductsOrder: number
    addProductsToCart: (product: ProductType) => void
    removeProductFromCart: (product: ProductType) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {

    const [productsCartState, dispatch] = useReducer(
        cartReducer,
        {
            productsCart: [],
        },
        (initialState) => {
            return initialState
        }
    )

    const { productsCart } = productsCartState

    function addProductsToCart(product: ProductType) {
        const productAlreadyInTheCart = productsCart.find((productsCart) => productsCart.id == product.id)
        
        if (productAlreadyInTheCart) {
            dispatch(removeCartProductAction(productAlreadyInTheCart))
        }
        dispatch(addNewProductToCartAction(product))
        
    }

    function removeProductFromCart(product: ProductType) {
        console.log(product)
        const productAlreadyInTheCart = productsCart.find((productsCart) => productsCart.id == product.id)
        console.log(productAlreadyInTheCart)
        dispatch(removeCartProductAction(product))
    }

    const amountProductsOrder = productsCart.length

    return (
        <CartContext.Provider value={{ 
            productsCart,
            amountProductsOrder,
            addProductsToCart,
            removeProductFromCart
         }}>
            {children}
        </CartContext.Provider>
    )

}
