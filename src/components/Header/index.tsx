import { CartButton, HeaderContainer, Location } from "./styles"
import logoCoffeeDelivery from "../../assets/images/coffee-delivery-logo.svg"
import { MapPin, ShoppingCart } from "@phosphor-icons/react"
import { CartContext } from "../../contexts/CartContext"
import { useContext } from "react"
import { NavLink } from "react-router-dom"

export function Header() {

    const { amountProductsOrder } = useContext(CartContext)

    return (
        <HeaderContainer>
            <NavLink to="/" title="Home">
                <img src={logoCoffeeDelivery} alt="" />
            </NavLink>
            <nav>
                <Location> 
                    <MapPin size={22} weight="fill"/> 
                    <p>Porto Alegre, RS</p>
                </Location>
                <NavLink to="/checkout" title="Checkout">
                    <CartButton>
                        <ShoppingCart size={22} weight="fill" />
                        {amountProductsOrder > 0 && (
                            <span>{amountProductsOrder}</span>
                        )}
                    </CartButton>
                </NavLink>
            </nav>
        </HeaderContainer>
    ) 
}