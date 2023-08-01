import { useEffect, useState } from "react"
import { CounterContainer, DecrementButton, IncrementButton, ProductCount } from "./styles"
import { Minus, Plus } from "@phosphor-icons/react"

interface CounterProps {
    onAmountChange: (newAmount: number) => void;
}

export function Counter({ onAmountChange }: CounterProps) {
    
    const [amount, setAmount] = useState(1)

    function handleIncrementDecrementAmount(action: string) {

        if (action == "+") {
            setAmount((state) => state + 1)
        }
        else {
            setAmount((state) => state - 1)
        }
    }

    useEffect(() => {
        onAmountChange(amount); // Chame a função onAmountChange para atualizar o estado no componente pai
    }, [amount, onAmountChange]);
    
    return (
        <CounterContainer>
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
        </CounterContainer>
        
    )
}