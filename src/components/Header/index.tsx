import { CartButton, HeaderContainer, Location } from "./styles"
import logoCoffeeDelivery from "../../assets/images/coffee-delivery-logo.svg"
import { MapPin, ShoppingCart } from "@phosphor-icons/react"
import { CartContext } from "../../contexts/CartContext"
import { useContext } from "react"

export function Header() {

    const { amountProductsOrder } = useContext(CartContext)

    return (
        <HeaderContainer>
            <img src={logoCoffeeDelivery} alt="" />
            <nav>
                <Location> 
                    <MapPin size={22} weight="fill"/> 
                    <p>Porto Alegre, RS</p>
                </Location>
                <CartButton>
                    <ShoppingCart size={22} weight="fill" />
                    {amountProductsOrder > 0 && (
                        <span>{amountProductsOrder}</span>
                    )}
                </CartButton>
            </nav>
        </HeaderContainer>
    )
}