import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react"
import { BuyButton, ProductCartContainer, DecrementButton, IncrementButton, ProductCount } from "./styles"

import { CartContext } from "../../../../contexts/CartContext"
import { useContext, useState } from "react"
import { ProductType } from "../../../../products/products"

interface ProductCartProps {
    product: ProductType
}

export function ProductCart({ product }: ProductCartProps) {

    const { addProductsToCart } = useContext(CartContext)
    const [amount, setAmount] = useState(1)

    function handleIncrementDecrementAmount(action: string) {

        if (action == "+") {
            setAmount((state) => state + 1)
        }
        else {
            setAmount((state) => state - 1)
        }
    }

    function handleAddProductToCart() {
        const addNewProductToCart = { ...product, amount }
        addProductsToCart(addNewProductToCart)
    }

    return (
        <ProductCartContainer>
            <DecrementButton 
                onClick={() => handleIncrementDecrementAmount('-')}
                disabled={amount == 1 ? true : false}
            >
                <Minus weight="bold" size={14}/>
            </DecrementButton>
            <ProductCount>{amount}</ProductCount>
            <IncrementButton 
                onClick={() => handleIncrementDecrementAmount('+')}
            >
                <Plus weight="bold" size={14}/>
            </IncrementButton>

            <BuyButton onClick={handleAddProductToCart} >
                <ShoppingCart weight="fill" size={22}/>
            </BuyButton>
        </ProductCartContainer>
        
    )
}