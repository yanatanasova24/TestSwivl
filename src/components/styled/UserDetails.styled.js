import styled from "styled-components";
import { theme } from "./Theme";

export const UserDetails = styled.article`
    width: 33%;
    padding-right: 25px;

    @media(max-width: ${theme.responsive.md}){
            width: 100%;
            display: flex;
            justify-content: start;
        }

        @media(max-width: ${theme.responsive.sm}){
            flex-direction: column;
            padding-right: 0;
        }

        @media(max-width: ${theme.responsive.xs}){
            align-items: center;
        }
`

/* User Header */

export const HeaderUserDetails = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;

    img{
        width: 120px;
        height: 120px;
    }

    @media(max-width: ${theme.responsive.md}){
            max-width: 300px;
            flex-shrink: 0;
        }

    
`

export const UserInformation = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 25px;
    position: relative;

    &:after{
        content: '';
        width: 16px;
        height: 16px;
        background-image: url('./images/icon_3_dots_menu.svg');
        position: absolute;
        right: 30px;
        top: 5px;

        @media(max-width: ${theme.responsive.lg}){
            right: -10px;
        }
    }

    &:hover:after{
        cursor: pointer;
    }

`

export const Name = styled.h3`
    font-family: ${theme.fontFamilyName};
    font-size: 24px;
    line-height: 1.1em;
`

export const Nickname = styled.a`
    font-size: 16px;
    margin-top: 8px;

    &:hover{
        color: ${theme.colors.accent};
        cursor: pointer;
    }
`

export const EditProfileButton = styled.a`
    display: block;
    color: ${theme.colors.accent};
    text-decoration: underline;
    font-size: 16px;
    margin-top: 14px;

    &:before{
        content: '';
        display: inline-block;
        width: 20px;
        height: 20px;
        background-image: url('./images/edit icon.svg');
        margin-right: 8px;
        vertical-align: middle;
    }

    &:hover{
        text-decoration: none;
        cursor: pointer;
    }
`

export const DotsMenu = styled.div`
    background-color: #fff;
    backdrop-filter: blur(21.746253967285156px);
    opacity: .94;
    box-shadow: 0px 24px 24px 0px #0000001F;
    width: 176px;
    position: absolute;
    right: 0;
    top: 46px;
    transform: translateX(72%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    border-radius: 8px;

    a{
        padding: 7px 0;
        font-size: 16px;
        display: inline-block;
        width: 100%;
        text-align: center;

        &:hover{
            background-color: ${theme.colors.bg_hover};
            backdrop-filter: blur(54.36563491821289px);
            cursor: pointer;
        }
    }

    img{
        width: 20px;
        height: 20px;
        vertical-align: middle;
        margin-right: 20px;
    }

    .icon_block{
        width: 16px;
    }

    &.off{
        display: none;
    }

    @media(max-width: ${theme.responsive.lg}){
            right: -48px;
        }

        @media(max-width: ${theme.responsive.sm}){
            right: 122px;
        }
`
/* User Content */

export const UserDetailsContent = styled.div`
    @media(max-width: ${theme.responsive.md}){
            padding-left: 30px;
        }

        @media(max-width: ${theme.responsive.sm}){
            padding-left: 0;
            margin-top: 20px;
        }
`

export const Followers = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 33px;
    width: 83%;

    div{
        text-align: center;
        font-size: 16px;
    }

    span{
        display: inline-block;
        width: 100%;
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 3px;
    }

    @media(max-width: ${theme.responsive.md}){
            padding-top: 0;
            width: 100%;
            justify-content: start;
        }

    @media(max-width: ${theme.responsive.xs}){
            justify-content: center;
        }
`

export const Description = styled.p`
    font-size: 16px;
    margin-top: 25px;
    line-height: 1.45em;
`
