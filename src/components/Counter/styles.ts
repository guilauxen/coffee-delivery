import styled from "styled-components"

export const CounterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const BaseIncrementDecrementButton = styled.button`
    height: 2.375rem;
    width: calc(4.5rem / 3);
    border: 0;

    background: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme.purple};

    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0.5rem 0;

    cursor: pointer;

    &:not(:disabled):hover {
        color: ${(props) => props.theme["purple-dark"]};
    }
`

export const DecrementButton = styled(BaseIncrementDecrementButton)`
    border-radius: 6px 0 0 6px;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`

export const IncrementButton = styled(BaseIncrementDecrementButton)`
    border-radius: 0 6px 6px 0;
`

export const ProductCount = styled.span`
    height: 2.375rem;
    width: calc(4.5rem / 3);

    background: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-title"]};

    display: flex;
    justify-content: center;
    align-items: center;
`