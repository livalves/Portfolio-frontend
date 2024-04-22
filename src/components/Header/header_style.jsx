import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing:border-box;
        background-color: #1D1A39;
        font-family: "Raleway", sans-serif;
    }
`;

export const Header = styled.header`

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 10vh;
        padding: 1rem;
    }
    
    p{
        font-size: 30px;
        color: #F39F5A;
    }

    button{
        width: 50px;
        height: 50px;
        font-size: 2rem;
        border: none;
        background-color: transparent;
        cursor: pointer;
        padding-right: 2rem;
        color: #F39F5A;
    }

    ul {
        border: 1px solid green;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 90vh;
        width: 100%;
        background-color: #1C1A38;
        position: absolute;
        z-index: 1;
        list-style-type: none;
    } 

    li{
        padding: 1em;
    }

    .link{
        color: #fff;
        text-decoration: none;
        background-color: transparent;
        transition: color 0.3s ease;
        
        &:hover {
            color: #F39F5A;
        }

        span {
            font-size: 3rem;
        }
 
    }
`;


