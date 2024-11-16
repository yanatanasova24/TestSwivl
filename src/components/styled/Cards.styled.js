import styled from "styled-components";
import { theme } from "./Theme";

export const CardsWrap = styled.div`
    width: 66%;

    @media(max-width: ${theme.responsive.md}){
            width: 100%;
            
        }

        @media(max-width: ${theme.responsive.sm}){
            margin-top: 20px;
        }
`

/* Privacy switcher on top */

export const PrivacySwitcher = styled.div`
    display: flex;
    color: ${theme.colors.text_dark};
    font-size: 16px;
    align-items: center;
    gap: 20px;
    width: 198px;
    margin-left: 10px;

    @media(max-width: ${theme.responsive.sm}){
            margin-left: 0;
        }
`


export const TumblerWrap = styled.div`
    margin: 0 auto;
    width: 40px;
    height: 24px;
    background-color: #ED5267;
    border-radius: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3px;
    cursor: pointer;
    position: relative;

    .Tumbler {
        position: absolute;
        height: 18px;
        width: 18px;
        border-radius: 50%;
        background-color: #fff;
        transition: transform .5s,background-color .5s;
        will-change: transform;
        z-index: 2;
        transform: translateX(calc(100% - 2px));
    }

    &.off .Tumbler{
        transform: translateX(0);
    }

    &.off{
        background-color: ${theme.colors.bg_hover};
    }
`

/* Cards Grid */

export const CardsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr)); 
    grid-template-rows: 280px 280px; 
    gap: 23px;
    margin-top: 63px;
    align-items: stretch;

    @media(max-width: ${theme.responsive.md}){
            grid-template-rows: 1fr 1fr; 
        }

        @media(max-width: ${theme.responsive.sm}){
            margin-top: 30px;
        }

        @media(max-width: ${theme.responsive.xs}){
            grid-template-columns: 100%; 
        }

`

export const CardItem = styled.div`
    background: #fff;
    box-shadow: 0px 24px 24px 0px #0000001F;
    border-radius: 14px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    max-width: 374px;

    p{
        font-size: 36px;
        font-family: ${theme.fontFamilyName};
        font-weight: 400;
        margin-top: auto;
        color: ${theme.colors.text_dark};

        @media(max-width: ${theme.responsive.lg}){
            font-size: 30px;
        }

        @media(max-width: ${theme.responsive.md}){
            font-size: 24px;
        }
    }

    @media(max-width: ${theme.responsive.lg}){
            max-width: 31vw;
        }

    @media(max-width: ${theme.responsive.md}){
            max-width: unset;
        }
`

export const UserInCard = styled.div`
    display: flex;
    align-items: center;

    p{
        font-size: 14px;
        font-family: ${theme.fontFamily};
        margin-top: 0;
    } 

    @media(max-width: ${theme.responsive.md}){
            margin-bottom: 10px;
        }
    
`

export const AvatarPlaceholder = styled.div`
    border-radius: 50%;
    height: 24px;
    width: 24px;
    background-color: #B2B3BB;
    margin-right: 10px;
    flex-shrink: 0;
;
`

export const CardShared = styled.div`

    p{
        font-size: 16px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding: 3px 0;
        border-radius: 6px;
    }

    p span{
        background-color: ${theme.colors.bg_hover};
        border-radius: 6px;
        padding: 3px 5px;
        margin-left: 3px;

        &:hover{
            text-decoration: underline;
            cursor: pointer;
        }
    }

    img{
        vertical-align: middle;
        margin-right: 3px;
        margin-bottom: 2px;
    }
`

export const CardFooter = styled.div`
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    margin-top: 43px;

    @media(max-width: ${theme.responsive.md}){
            flex-direction: column;
            margin-top: 25px;
        }
`

export const ShareLink = styled.a`
    color: ${theme.colors.accent};
    font-size: 18px;
    border-bottom: 1px solid #fff;

    &:hover{
        border-bottom: 1px solid ${theme.colors.accent};
        cursor: pointer;
    }
`

export const UserInCardStats = styled.div`
    display: flex;

`
export const StatsIcon = styled.div`
    display: flex;
    align-items: center;
    margin-left: 16px;

    span{
        margin-left: 8px;
    }

    @media(max-width: ${theme.responsive.md}){
            margin: 0 6px 0 0;
        }
`