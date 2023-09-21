import { Trash } from "@phosphor-icons/react"
import { 
    ButtonCheckoutConfirm,
    ButtonRemove, 
    CheckoutContainer, 
    CheckoutProducts, 
    CheckoutProductsActions, 
    CheckoutProductsBill, 
    CheckoutProductsData, 
    CheckoutProductsImage, 
    CheckoutProductsItem, 
    CheckoutProductsPrice, 
} from "./styles"

import { CartContext } from "../../contexts/CartContext"
import { useContext, useState } from "react"
import { Counter } from "../../components/Counter"
import { CheckoutForm } from "./components/CheckoutForm"

export function Checkout() {

    const { productsCart, removeProductFromCart } = useContext(CartContext)

    const [amount, setAmounts] = useState<{ [productId: number]: number }>({});
 
    function handleAmountChange(productId: number, newAmount: number) {
        setAmounts((prevAmounts) => ({
            ...prevAmounts,
            [productId]: newAmount,
        }));
    }
    
    function handleRemoveProduct(product: any) {
        removeProductFromCart(product)
    }

    let totalPrice = 0
    let deliveryPrice = 3.5

    return (
        <CheckoutContainer>
            <CheckoutForm />
            <aside>
                <h5>Cafés selecionados</h5>
                <CheckoutProducts>
                    {productsCart.length > 0 ? (
                        <div>
                        <ul>
                            {productsCart.map((product) => {
                            const productAmount = amount[product.id] || product.amount;
                            const productPrice = product.price * productAmount;
                            totalPrice += productPrice;

                            return (
                                <li key={product.id}>
                                <CheckoutProductsItem>
                                    <CheckoutProductsImage src={product.image} />
                                    <CheckoutProductsData>
                                    {product.title}
                                    <CheckoutProductsActions>
                                        <Counter
                                        onAmountChange={(newAmount) =>
                                            handleAmountChange(product.id, newAmount)
                                        }
                                        initialAmount={product.amount}
                                        />
                                        <ButtonRemove
                                        onClick={() => handleRemoveProduct(product)}
                                        >
                                        <Trash size={16} className="iconColor" />
                                        REMOVER
                                        </ButtonRemove>
                                    </CheckoutProductsActions>
                                    </CheckoutProductsData>
                                </CheckoutProductsItem>
                                <CheckoutProductsPrice>
                                    R$ {(productPrice).toFixed(2).replace('.', ',')}
                                </CheckoutProductsPrice>
                                </li>
                            );
                            })}
                        </ul>
                        <CheckoutProductsBill>
                            <div>
                            <p className="productsBillSmall">Total de itens</p>
                            <p>R$ {(totalPrice).toFixed(2).replace('.', ',')}</p>
                            </div>
                            <div>
                            <p className="productsBillSmall">Entrega</p>
                            <p>R$ {(deliveryPrice).toFixed(2).replace('.', ',')}</p>
                            </div>
                            <div className="productsBillTotalPrice">
                            <p>Total</p>
                            <p>
                                R${' '}
                                {(totalPrice + deliveryPrice).toFixed(2).replace('.', ',')}
                            </p>
                            </div>
                        </CheckoutProductsBill>
                        
                    
                        <ButtonCheckoutConfirm form="checkout-form" type="submit">
                            CONFIRMAR PEDIDO
                        </ButtonCheckoutConfirm>
                        </div>
                    ) : (
                        <p>Seu carrinho está vazio.</p>
                    )}
                </CheckoutProducts>
            </aside>
        </CheckoutContainer>
    )
}