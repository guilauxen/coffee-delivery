import { useState } from "react"
import { CounterContainer, DecrementButton, IncrementButton, ProductCount } from "./styles"
import { Minus, Plus } from "@phosphor-icons/react"

interface CounterProps {
    onAmountChange: (newAmount: number) => void;
    initialAmount: number;
}

export function Counter({ onAmountChange, initialAmount }: CounterProps) {
    
    const [amount, setAmount] = useState(initialAmount)

    function handleIncrementDecrementAmount(action: string) {

        if (action == "+") {
            setAmount((state) => state + 1)
            onAmountChange(amount + 1);
        }
        else {
            setAmount((state) => state - 1)
            onAmountChange(amount - 1);
        }
    }

    // useEffect(() => {
    //     // Remova a chamada de onAmountChange aqui para evitar o loop infinito
    // }, [initialAmount]);

    // useEffect(() => {
    //     onAmountChange(amount); // Chame a função onAmountChange para atualizar o estado no componente pai
    // }, [amount, onAmountChange]);
    
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