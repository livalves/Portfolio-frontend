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

    border-bottom: 1px solid #F39F5A;

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 10vh;
        padding: 1rem;
    }

    img{
        width: 50px;
        height: 50px;
    }
    
    p{
        font-size: 30px;
        color: #F39F5A;
        font-weight: bold;
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 90vh;
        width: 100%;
        backdrop-filter: blur(10px);
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        z-index: 1;
        list-style-type: none;
    } 

    li{
        padding: 1em;
        background-color: transparent;
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
            font-weight: bold;
            font-size: 3rem;
            background-color: transparent;
        }
 
    }
`;


