import styled from "styled-components"

export const HeaderContainer = styled.header`
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${(props) => props.theme.background};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;

    max-width: 90rem;
    height: 6.5rem;

    img {
        margin: 0 10rem;
        height: 2.5rem;
        width: 5.30rem;
    }

    nav {
        margin: 0 10rem;
        display: flex;
        gap: 0.75rem;
    }
`

export const Location = styled.span`
    
    display: flex;
    align-items: center;
    justify-content: space-around;

    padding: 0.5rem;

    background: ${(props) => props.theme["purple-light"]};
    color: ${(props) => props.theme["purple"]};

    width: 8.9375rem;
    height: 2.375rem;
    border-radius: 6px;

    p {
        color: ${(props) => props.theme["purple-dark"]};
        font-size: 0.875rem;
    }
    
`

export const CartButton = styled.button`

    background: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};

    border: 0;
    border-radius: 6px;

    height: 2.375rem;
    width: 2.375rem;
    padding: 0.5rem;

    cursor: pointer;

    span {
        background: ${(props) => props.theme["yellow-dark"]};
        color: ${(props) => props.theme.white};
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 999px;
        font-size: 0.75rem;
        font-weight: bold;

        position: absolute;
        margin: -15px 0 0 0;
        padding: 0.2rem;
    }
`