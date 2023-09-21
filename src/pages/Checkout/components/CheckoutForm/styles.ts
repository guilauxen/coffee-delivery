import styled from "styled-components";

export const CheckoutFormContainer = styled.form`
    margin-left: 10rem;   
`
export const CheckoutAddress = styled.div`
    margin-top: 0.9375rem;

    background: ${(props) => props.theme["base-card"]};

    width: 40rem;
    height: 23.25rem;
    padding: 2.5rem;

    border-radius: 6px;

    .checkoutAddressForm {
        margin-top: 1rem;

        div {
            display: flex;
            gap: 0.75rem;
        }
    }
`

export const CheckoutTop = styled.div`
    display: flex;
    gap: 0.5rem;

    .checkoutTopAddressSpan {
        color: ${(props) => props.theme["yellow-dark"]};
    }

    .checkoutTopPaymentSpan {
        color: ${(props) => props.theme.purple};
    }
`

export const CheckoutTitle = styled.p`
    color: ${(props) => props.theme["base-subtitle"]};
`

export const CheckoutSubtitle = styled.p`
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.875rem;
    margin-top: 2px;
`

const INPUT_SIZE = {
    extra_small: "60px",
    small: "200px",
    medium: "276px",
    large: "348px",
    extra_large: "560px"
} as const

interface InputProps {
    inputSize: keyof typeof INPUT_SIZE
}

export const InputForm = styled.div<InputProps>`
    position: relative;
    display: inline-block;

    input {
        width: ${(props) => INPUT_SIZE[props.inputSize]};
        height: 2.625rem;
        padding: 0.875rem;
        margin-top: 1rem;
        box-sizing: border-box;

        background: ${(props) => props.theme["base-input"]};
        color: ${(props) => props.theme["base-text"]};

        border: solid 1px;
        border-radius: 4px;
        
        &::placeholder {
            color: ${(props) => props.theme["base-label"]};
        }

        &:focus {
            border-color: ${(props) => props.theme["yellow-dark"]};
        }

        &:not(:focus) {
            border-color: ${(props) => props.theme["base-button"]};
        }

    }

    .optional-text {
        position: absolute;
        top: 50%;
        right: 12px;
        font-size: 0.75rem;
        font-style: italic;
        color: ${(props) => props.theme["base-label"]};
        pointer-events: none;
    }
`

export const CheckoutPayment = styled.div`
    margin-top: 0.75rem;
    background: ${(props) => props.theme["base-card"]};

    width: 40rem;
    padding: 2.5rem;
    height: 12.9375;

    border-radius: 6px;
`

export const ButtonPaymentGroup = styled.div`
    display: flex;
    gap: 0.75rem;
    margin-top: 2rem;
`

export const ButtonPayment = styled.button`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    padding: 1rem;

    height: 3.1875rem;
    width: 11.125rem;

    border: none;
    border-radius: 6px;
    background: ${(props) => props.theme["base-button"]};

    color: ${(props) => props.theme["base-text"]};
    font-size: 0.75rem;

    cursor: pointer;

    .iconColor {
        color: ${(props) => props.theme.purple};
    }

    &:hover {
        background: ${(props) => props.theme["base-hover"]};
    }

    &:focus {
        background: ${(props) => props.theme["purple-light"]};
    }
`