import { 
    Bank, 
    CreditCard, 
    CurrencyDollar, 
    MapPinLine, 
    Money } 
from "@phosphor-icons/react";

import { 
    ButtonPayment, 
    ButtonPaymentGroup, 
    CheckoutAddress, 
    CheckoutFormContainer, 
    CheckoutPayment, 
    CheckoutSubtitle, 
    CheckoutTitle, 
    CheckoutTop, 
    InputForm } 
from "./styles";

export function CheckoutForm() {
    return (
        <CheckoutFormContainer
            id="checkout-form"
        >

            <h5>Complete seu pedido</h5>
            <CheckoutAddress>

                <CheckoutTop>
                    <div>
                        <span className="checkoutTopAddressSpan">
                            <MapPinLine size={22}/>
                        </span>
                    </div>
                    <div>
                        <CheckoutTitle>
                            Endereço de entrega
                        </CheckoutTitle>
                        <CheckoutSubtitle>
                            Informe o endereço onde deseja receber o pedido
                        </CheckoutSubtitle>
                    </div>
                </CheckoutTop>
                
                <div className="checkoutAddressForm">
                    <div>
                        <InputForm inputSize="small">
                            <input type="text" placeholder="CEP" />
                        </InputForm>  
                    </div>
                    <div>
                        <InputForm inputSize="extra_large">
                            <input type="text" placeholder="Rua" />
                        </InputForm> 
                    </div>
                    <div>
                        <InputForm inputSize="small">
                            <input type="number" placeholder="Número" />
                        </InputForm> 
                        <InputForm inputSize="large">
                            <input type="text" placeholder="Complemento" />
                            <span className="optional-text">Opcional</span>
                        </InputForm> 
                    </div>
                    <div>
                        <InputForm inputSize="small">
                            <input type="text" placeholder="Bairro" />
                        </InputForm> 
                        <InputForm inputSize="medium">
                            <input type="text" placeholder="Cidade" />
                        </InputForm> 
                        <InputForm inputSize="extra_small">
                            <input 
                                type="text" 
                                placeholder="UF" 
                                maxLength={2} 
                                onKeyUpCapture={(event) => {
                                    event.currentTarget.value = event.currentTarget.value.toUpperCase();
                                }} 
                            />
                        </InputForm> 
                    </div>
                </div>
            </CheckoutAddress>

            <CheckoutPayment>

                <CheckoutTop>
                    <div>
                        <span className="checkoutTopPaymentSpan">
                            <CurrencyDollar size={22}/>
                        </span>
                    </div>
                    <div>
                        <CheckoutTitle>
                            Pagamento
                        </CheckoutTitle>
                        <CheckoutSubtitle>
                            O pagamento é feito na entrega. Escolha a forma que deseja pagar
                        </CheckoutSubtitle>
                    </div>
                </CheckoutTop>

                <ButtonPaymentGroup>
                    <ButtonPayment>
                        <CreditCard size={16} className="iconColor"/>
                        CARTÃO DE CRÉDITO
                    </ButtonPayment>
                    <ButtonPayment>
                        <Bank size={16} className="iconColor"/>
                        CARTÃO DE DÉBITO
                    </ButtonPayment>
                    <ButtonPayment>
                        <Money size={16} className="iconColor"/>
                        DINHEIRO
                    </ButtonPayment>
                </ButtonPaymentGroup>

            </CheckoutPayment>
            
        </CheckoutFormContainer>
    )
}