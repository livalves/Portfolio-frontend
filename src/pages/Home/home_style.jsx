import styled from "styled-components";

export const Section = styled.section`
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   height: 80vh;
   padding: 0 1em;

   .info{
      height: 40vh;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
   }
   
   .titles{
      color: white;
      height: 30vh;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
   }

   .titles h1{
      color: white;
      font-size: 3rem;
   }

   .titles span{
      color: #F39F5A;
      font-size: 3rem;
      font-weight: bold;
   }

   .titles p{
      color: #828282;
      font-weight: bold;
   }

   img{
      width: 100%;
      height: 50vh;
   }

   .cv button{
      border: 1px solid #F39F5A;
      color: #F39F5A;
      border-radius: 5em;
      padding: 1em 2em;
      cursor: pointer;
   }

   .cv button:hover{
      border: 1px solid white;
      color: white;
   }
`;


