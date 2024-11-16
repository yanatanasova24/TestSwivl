import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        transition: .3s all;
    }
    body{
        font-family: ${theme.fontFamily}, serif;
        color: ${theme.colors.text};
        font-size: 14px;
        background: ${theme.colors.bg};
    }

    a{
        text-decoration: none;
        color: inherit;
    }
`