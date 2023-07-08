import { ReactNode, createContext, useReducer } from "react"
import { ProductType } from "../products/products"
import { cartReducer } from "../reducers/cart/reducer"
import { addNewProductToCartAction } from "../reducers/cart/actions"

interface CartContextProviderProps {
    children: ReactNode
}

interface CartContextType {
    productsCart: ProductType[]
    amountProductsOrder: number
    addProductsToCart: (product: ProductType) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {

    //const [productsCart, setProductsCart] = useState<ProductType[]>([])

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
        const productIsAlreadyInTheCart = productsCart.find((productsCart) => productsCart.id == product.id)
        
        if (productIsAlreadyInTheCart) {
            window.alert('já está no carrinho')
        }
        else {
            //setProductsCart([...productsCart, product])
            
            dispatch(addNewProductToCartAction(product))
        }
        
    }

    const amountProductsOrder = productsCart.length

    return (
        <CartContext.Provider value={{ 
            productsCart,
            amountProductsOrder,
            addProductsToCart,
         }}>
            {children}
        </CartContext.Provider>
    )

}
