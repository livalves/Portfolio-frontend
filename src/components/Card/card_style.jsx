import styled from "styled-components";

export const Card = styled.div`
    border: 1px #F39F5A dashed;
    display: flex;
    padding: 1rem;

    .card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    p{
        color: #F39F5A;
        font-size: 0.8em;
        padding-bottom: 0.5em;
        font-weight: bold;
    }

    svg{
        font-size: 3rem;
        color: #F39F5A;
    }
`;