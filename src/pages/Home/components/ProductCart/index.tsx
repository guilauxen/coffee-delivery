import { ShoppingCart } from "@phosphor-icons/react"
import { BuyButton, ProductCartContainer } from "./styles"

import { CartContext } from "../../../../contexts/CartContext"
import { useContext, useState } from "react"
import { ProductType } from "../../../../products/products"
import { Counter } from "../../../../components/Counter"

interface ProductCartProps {
    product: ProductType
}

export function ProductCart({ product }: ProductCartProps) {

    const { addProductsToCart } = useContext(CartContext)
    const [amount, setAmount] = useState(1)
 
    function handleAddProductToCart() {
        const addNewProductToCart = { ...product, amount }
        addProductsToCart(addNewProductToCart)
    }

    function handleAmountChange(newAmount: number) {
        setAmount(newAmount);
    }

    return (
        <ProductCartContainer>
            <Counter onAmountChange={handleAmountChange} initialAmount={amount} />

            <BuyButton onClick={handleAddProductToCart} >
                <ShoppingCart weight="fill" size={22}/>
            </BuyButton>
        </ProductCartContainer>
        
    )
}