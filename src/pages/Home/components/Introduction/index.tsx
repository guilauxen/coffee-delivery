import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react"
import { 
    IntroductionContainer,
    TitleIntroduction,
    SubtitleIntroduction,
    Items,
    IconShoppingCart,
    IconPackage,
    IconCoffee,
    IconTime
} from "./styles"
import imageCupCoffee from "../../../../assets/images/image-cup-coffee.png"


export function Introduction() {
    return (
        <IntroductionContainer>
            <article>
                <div>
                    <div>
                        <TitleIntroduction>
                            Encontre o café perfeito para qualquer hora do dia
                        </TitleIntroduction>
                        <SubtitleIntroduction>
                            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                        </SubtitleIntroduction>
                    </div>
                    <Items>
                        <li>
                            <IconShoppingCart>
                                <ShoppingCart size={16} weight="fill" />
                            </IconShoppingCart>
                            Compra simples e segura
                        </li>
                        <li>
                            <IconPackage>
                                <Package size={16} weight="fill" />
                            </IconPackage>
                            Embalagem mantém o café intacto
                        </li>
                        <li>
                            <IconTime>
                                <Timer size={16} weight="fill" />
                            </IconTime>
                            Entrega rápida e rastreada
                        </li>
                        <li>
                            <IconCoffee>
                                <Coffee size={16} weight="fill" />
                            </IconCoffee>
                            O café chega fresquinho até você
                        </li>
                    </Items>
                </div>
                <div>
                    <img src={imageCupCoffee} />
                </div>
            </article>
        </IntroductionContainer>
    )
}