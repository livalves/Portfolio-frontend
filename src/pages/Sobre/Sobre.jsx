import React from 'react';
import Header from "../../components/Header/Header";
import * as S from "../../components/Header/header_style";
import Footer from "../../components/Footer/Footer";

export default function Sobre() {
  return (
    <> 
      <S.GlobalStyle/>
      <Header/>
      <section>
        <p>Sobre</p>
      </section>
      <Footer/>
    </>
  )
}

