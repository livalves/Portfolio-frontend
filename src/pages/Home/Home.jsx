import React from 'react';
import Header from "../../components/Header/Header";
import * as S from "../../components/Header/header_style";
import * as H from "./home_style.jsx";


export default function Home() {
  return (
    <> 
        <S.GlobalStyle/>
        <Header/>
        <H.Section>
            <div className='titles'>
                <div>
                    <h1>Olá, eu sou a
                        <span> Lívia Alves :)</span>
                    </h1> 
                    <p>Desenvolvedora Font-end</p>
                </div>
                
                <div className='profiles'>

                </div>
            </div>
            <div className='image'>
                <img src="" alt="" />
            </div>
        </H.Section>
    </>
  )
}
