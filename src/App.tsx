import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyleComponent } from "./styles/global"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { CartContextProvider } from "./contexts/CartContext"

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <CartContextProvider>
                    <Router />
                </CartContextProvider>
                
            </BrowserRouter>

            <GlobalStyleComponent />
        </ThemeProvider>
        
    )
}