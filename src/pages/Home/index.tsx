import { 
    HomeContainer,
} from "./styles"

import { Products } from "./components/Products"
import { Introduction } from "./components/Introduction"

export function Home() {
    return (
        <HomeContainer>
            
            <Introduction />
            <Products />                

        </HomeContainer>
    )
}