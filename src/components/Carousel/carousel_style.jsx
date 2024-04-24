import styled from "styled-components";

export const Item = styled.div`
    display: flex;
    flex-direction: column;

    .image{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .text{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .image img{
        width: 100%;
        height: 40vh;
        border-radius: 0.5em;
    }

    .text h2{
        color: #F39F5A;
        padding-top: 1rem;
    }

    .text a{
        text-decoration: none;
        color: white;
        font-size: 0.8rem;
        padding-top: 0.5rem;
    }

    .text a:hover{
        color: #F39F5A;
    }
        @media(max-width: 1007px){
            .image img{
                width: 90%;
                height: 30vh;
            }
        }
        @media(max-width: 640px){
            .image img{
                width: 90%;
                height: 20vh;
            }
        }
`;