import React from 'react';
import Header from "../../components/Header/Header";
import * as S from "../../components/Header/header_style";
import * as H from "./home_style.jsx";
import Footer from "../../components/Footer/Footer";
import Foto from "../../assets/foto.png";
import CV from "../../assets/cv-liviaalves.pdf";

export default function Home() {

    return (
        <> 
            <S.GlobalStyle/>
            <Header/>
            <H.Section>
                <div className='info'>
                    <div className='titles'>
                        <h1>Olá, eu sou a</h1> 
                        <span> Lívia Alves :)</span>
                        <p>Desenvolvedora Font-end</p>
                    </div>
                    
                    <div className='cv'>
                        <a href={CV} download>
                            <button>Baixar CV</button>
                        </a>
                    </div>
                </div>
                <div className='image'>
                    <img src={Foto} alt="Foto Lívia Alves" />
                </div>
            </H.Section>
            <Footer className="footer"/>
        </>
    )
}
