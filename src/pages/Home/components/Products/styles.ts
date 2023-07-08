import styled from "styled-components"

export const ProductsContainer = styled.section`
    margin: 2rem 10rem;

    ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        padding: 0;
        text-align: center;
        gap: 2rem;
        margin-top: 3.375rem;
    }

    li {
        display: grid;
        padding: 0;

        width: 15.765rem;

        background: ${(props) => props.theme["base-card"]};
        height: 19.375rem;
        
        border-radius: 6px 36px 6px 36px;

        div {
            display: flex;
            justify-content: center;
            align-items: center;
        }

    }
`

export const ProductsListTitle = styled.h2`
    color: ${(props) => props.theme["base-subtitle"]};
`

export const ProductImage = styled.img`
    margin-top: calc(0px - 1rem - 3px);
    padding: 0 4.25rem 0 4.25rem;
    
`

export const ProductType = styled.span`
    font-size: 0.625rem;
    font-weight: bold;
    color: ${(props) => props.theme["yellow-dark"]};
    background: ${(props) => props.theme["yellow-light"]};

    border-radius: 100px;
    height: 1.3125rem;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.25rem 0.5rem;
    margin: 0 0.125rem 0 0.125rem;
`

export const ProductTitle = styled.h4`
    margin: 0 1.25rem;
`

export const ProductDescription = styled.p`
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-label"]};
    margin: 0 1.25rem;
`

export const ProductBuy = styled.div`
    margin: 0 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
        width: 4.5rem;
    }
`

export const Price = styled.div`
    display: flex;
    align-items: center;

    margin-right: 1.4375rem;

    span:first-child {
        font-size: 0.875rem; 
    }

    h3 {
        margin-left: 0.3rem;
    }
`