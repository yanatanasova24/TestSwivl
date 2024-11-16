import styled from "styled-components";
import { theme } from "./Theme";

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 70px 0;

    section{
        @media(max-width: ${theme.responsive.md}){
            flex-direction: column;
        }
    }
    
`