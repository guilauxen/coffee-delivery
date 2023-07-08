import styled from "styled-components"
import ImageBackground from "../../../../assets/images/image-background.svg"

export const IntroductionContainer = styled.section`
    
    background-image: url(${ImageBackground});

    article {
        display: flex;
        height: 34rem;
        justify-content: space-between;
        align-items: center;
        gap: 3.5rem;

        margin: 2rem 10rem;
    }

    img {
        width: 29.75rem;
        height: 22.5rem;
    }
`

export const TitleIntroduction = styled.h1`
    color: ${(props) => props.theme["base-title"]};
`

export const SubtitleIntroduction = styled.p`
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-top: 1rem;
    line-height: 1.3;
`

export const Items = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    margin-top: 4.125rem;
    row-gap: 1.25rem;
    column-gap: 2.5rem;

    font-size: 1rem;
    line-height: 1.3;

    list-style: none;

    li {
        display: flex;
        align-items: center;
        min-width: 14.4375rem;
        height: 2rem;
        position: relative;
        padding-left: 2.75rem;
    }

`

export const BaseIconSpan = styled.span`
    position: absolute;
    left: 0;
    width: 2rem;
    height: 2rem;
    color: ${(props) => props.theme.background};
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const IconShoppingCart = styled(BaseIconSpan)`
    background: ${(props) => props.theme["yellow-dark"]};
`

export const IconPackage = styled(BaseIconSpan)`
    background: ${(props) => props.theme["base-text"]};
`

export const IconTime = styled(BaseIconSpan)`
    background: ${(props) => props.theme.yellow};
`

export const IconCoffee = styled(BaseIconSpan)`
    background: ${(props) => props.theme.purple};
`