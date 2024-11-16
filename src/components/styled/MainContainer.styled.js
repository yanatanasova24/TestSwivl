import styled from "styled-components";
import { theme } from "./Theme";

export const MainContainer = styled.section`
    max-width: ${theme.containerWidth};
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;

    @media(max-width: ${theme.responsive.md}){
            max-width: 100%;
            padding: 0 50px;
        }

    @media(max-width: ${theme.responsive.xs}){
            padding: 0 25px;
        }
`