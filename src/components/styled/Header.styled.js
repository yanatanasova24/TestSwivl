import styled from "styled-components";
import { theme } from "./Theme";

export const StyledHeader = styled.header`
    background-color: #fff;
    box-shadow: 0px 12px 12px 0px #0000000F;

    .Menu{
        width: 33%;
        padding: 23px 0 0;
    }

    .ProfileSection{
        display: flex;
        align-items: center;
        padding-bottom: 36px;

        .icons{
            @media(max-width: ${theme.responsive.sm}){
                display: none;
            }
        }

        @media(max-width: ${theme.responsive.sm}){
            padding-bottom: 48px;
        }
        
    }

`

/* Right part of header */

export const User = styled.div`
    display: flex;
    align-items: center;
    padding-right: 40px;
    position: relative;

    span{
        margin-right: 20px;
        font-size: 16px;
    }

    &:before{
        content: '';
        display: block;
        width: 16px;
        height: 16px;
        background-image: url('./images/a_icon_arrow.png');
        position: absolute;
        right: 13px;
    }
`

export const Avatar = styled.img`
    border-radius: 50%;
    width: 32px;
    height: 32px;
`

export const ActionButton = styled.button`
    position: absolute;
    right:15px;
    bottom:-32px;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    background: linear-gradient(135deg, #FF974F 0%, #E32C75 100%);
    border: 0;
    transition: .3s all;

    img{
        position: relative;
        z-index: 3;
    }
    
    &:hover{
        cursor: pointer;
    }

    &:after{
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-image: linear-gradient(135deg, #E32C75 0%, #FF974F 100%);
        transition: opacity 0.5s ease-out;
        z-index: 2;
        opacity: 0;
    }

    &:hover:after{
        opacity: 1;
    }

`   
/* Left part of header */

export const Nav = styled.nav`
        text-transform: uppercase;
        display: flex;
        justify-content: start;
        color: #3E4056;
        margin-top: 20px;

        a{
            opacity: .6;
            font-weight: 600;
            margin-right: 38px;
            padding-bottom: 24px;
            position: relative;
            transition: .3s opacity;
        }

        a.active, a:hover{
            opacity: 1;
            cursor: pointer;
        }

        a.active:before{
            content: '';
            display: block;
            width: 100%;
            height: 4px;
            position: absolute;
            bottom: 0;
            left: 0;
            background: linear-gradient(135deg, #FF974F 0%, #E32C75 100%);
        }
`

export const Logo = styled.img`

`


