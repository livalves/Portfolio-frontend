import styled from "styled-components";

export const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;

    div{
        border-top: 1px solid #F39F5A;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 10vh;
        padding: 1rem;
    }

    svg{
        font-size: 2rem;
        color: #F39F5A;
        cursor: pointer;
    }

    svg:hover{
        color: white;
    }
`;


