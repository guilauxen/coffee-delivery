import styled from "styled-components"

export const CheckoutContainer = styled.main`
    margin-top: 8.5rem;
    
    display: flex;
    align-items: flex-start;

    max-width: 90rem;
    height: 6.5rem;

    gap: 2rem;
`




export const CheckoutProducts = styled.div`
    margin-top: 0.9375rem;

    background: ${(props) => props.theme["base-card"]};

    width: 28rem;
    padding: 2.5rem;

    border-radius: 6px 44px 6px 44px;

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin-bottom: 3rem;
        position: relative;
    }

    li::after {
        content: "";
        display: block;
        width: 100%;
        border-top: 1px solid ${(props) => props.theme["base-button"]}; /* Estilo do hr */
        position: absolute;
        bottom: -1.5rem; /* Posição acima do espaço de 1rem */
    }
`

export const CheckoutProductsItem = styled.div`
    display: flex;
    gap: 1.25rem;
`

export const CheckoutProductsImage = styled.img`
    height: 4rem;
    width: 4rem;
`

export const CheckoutProductsData = styled.div`
    
`

export const CheckoutProductsActions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`

export const CheckoutProductsPrice = styled.div`
    color: ${(props) => props.theme["base-text"]};
    font-weight: bold;
`

export const ButtonRemove = styled.button`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.3rem;
    padding: 1rem 0.5rem;

    height: 2.375rem;
    width: 5.6875rem;

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
        color: ${(props) => props.theme["base-subtitle"]};

        .iconColor {
            color: ${(props) => props.theme["purple-dark"]};
        }
    }

    &:focus {
        background: ${(props) => props.theme["purple-light"]};
    }
`

export const CheckoutProductsBill = styled.div`
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.75rem;
    }

    .productsBillSmall {
        font-size: 0.875rem;
    }

    .productsBillTotalPrice {
        font-size: 1.25rem;
        color: ${(props) => props.theme["base-subtitle"]};
        font-weight: bold;
    }
`

export const ButtonCheckoutConfirm = styled.button`
    width: 100%;
    height: 2.875rem;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.yellow};

    border: none;
    border-radius: 6px;
    margin-top: 1rem;
    
    font-size: 0.875rem;
    font-weight: bold;

    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.theme["yellow-dark"]};
    }
`