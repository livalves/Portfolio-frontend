import styled from "styled-components";

export const Section = styled.section`
   color: white;
   padding: 0 1em;
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   height: 80vh;
   
   .about{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2em;
        width: 45%;
        height: 100%;
    }

    .about_text span{
        font-weight: bold;
    }

    .about p, li{
        color: #F39F5A;
    }

    .about_paragraph{
        padding: 0 1em;
    }

    .about_paragraph p{
        padding: 0.3em 0;
    }

    .about_training ul{
        list-style-type: none;
    }

    .skills{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2em;
        width: 45%;
        height: 100%;
    }

    h1{
        text-align: center;
        padding-bottom: 1em;
    }

    .cards{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1em;
    }

    .about_link a{
        text-decoration: none;
        color: white;
    }

    .about_link a:hover{
        color: #F39F5A;
    }

        @media(max-width: 1100px){
            background-color: #1D1A39;
            flex-direction: column;
            height: 100%;
            padding-bottom: 6em ;

            .about, .skills{
                width: 100%;
                padding: 1em 0;
            }

            .about_training ul{
                padding: 0 1em;
            }
        }
        @media(max-width: 1007px){
            background-color: #1D1A39;
            flex-direction: column;
            height: 100%;
            padding-bottom: 6em ;

            .about, .skills{
                width: 100%;
                padding: 1em 0;
            }

            .about_training ul{
                padding: 0 1em;
            }
        }
        @media(max-width: 640px){
            background-color: #1D1A39;
            flex-direction: column;
            height: 100%;
            padding-bottom: 6em ;

            .about, .skills{
                width: 100%;
                padding: 1em 0;
            }

            .about_training ul{
                padding: 0 1em;
            }
        }
`;


