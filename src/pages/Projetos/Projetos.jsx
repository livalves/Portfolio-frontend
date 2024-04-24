import React from 'react';
import Header from "../../components/Header/Header";
import * as S from "../../components/Header/header_style";
import Footer from "../../components/Footer/Footer";
import * as H from "./projetos_style";
import Carousel from 'react-elastic-carousel';
import McDonalds from "../../assets/proj-mcdonalds.png";
import PrimeVideo from "../../assets/proj-prime.png";
import ProfileLinks from "../../assets/proj-profile.png";
import NoRitmo from "../../assets/proj-ritmo.png";
import SelfCare from "../../assets/proj-selfcare.png";
import Todo from "../../assets/proj-todo.png";
import Item from "../../components/Carousel/Carousel";


export default function Projetos() {
  return (
    <> 
        <S.GlobalStyle/>
        <Header/>
        <H.Section>
            <h1>Projetos</h1>
            <Carousel className='carousel' enableAutoPlay autoPlaySpeed={2000}>
                <Item image={McDonalds} text={"McDonald's"} link={"https://github.com/livalves/McDonalds-page"}/>
                <Item image={ProfileLinks} text={"Social links profile"} link={"https://github.com/livalves/Social-links-profile"}/>
                <Item image={Todo} text={"ToDo"} link={"https://github.com/livalves/Todo-programaria"}/>
                <Item image={SelfCare} text={"SelfCare"} link={"https://github.com/livalves/Self-care"}/>
                <Item image={NoRitmo} text={"No ritmo da batida"} link={"https://github.com/livalves/No-ritmo-da-batida"}/>
                <Item image={PrimeVideo} text={"Prime Video"} link={"https://github.com/livalves/Prime-video"}/>
            </Carousel>
        </H.Section>
        <Footer/>
    </>
  )
}

