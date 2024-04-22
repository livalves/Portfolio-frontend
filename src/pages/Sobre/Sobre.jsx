import React from 'react';
import Header from "../../components/Header/Header";
import * as S from "../../components/Header/header_style";
import Footer from "../../components/Footer/Footer";
import * as H from "./sobre_style";
import { FaAws, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaReact } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFigma } from "react-icons/io5";
import { DiJqueryLogo } from "react-icons/di";
import { SiPhp, SiSqlite, SiFlutter, SiStyledcomponents } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import Card from "../../components/Card/Card";

export default function Sobre() {
  return (
    <> 
        <S.GlobalStyle/>
        <Header/>
        <H.Section>
            <div className='about'>
                <div className='about_text'>
                    <h1>Sobre</h1>
                    <div className='about_paragraph'>
                        <p>Sou uma entusiasta de tecnologia e projetos sociais, com formação técnica em Redes de Computadores e atualmente cursando o último semestre de Sistemas de Informação pela Uninassau.</p>
                        <p>Meu interesse em desenvolvimento web surgiu em 2020 com a primeira disciplina que cursei sobre Tecnologias Web. A partir daí, comecei a me aprofundar no mundo do desenvolvimento front-end.</p>
                        <p>Já tive experiência na área de <span>suporte técnico</span> atuando no Hospital Regional do Cariri e como <span>engenheira de dados</span> no programa AWS Cloud Data Engineering da Compass UOL.</p>
                    </div>
                </div>
                <div className='about_training'>
                    <h1>Formação Front-end</h1>
                    <ul>
                        <li>📚 2021 | Oracle One: Formação Front-end </li>
                        <li>📚 2023 | Instituro Nu: Fundamentos de FontEnd Development </li>
                        <li>📚 2024 | Vai na Web: Desenvolvedor Front-end  </li>
                    </ul> 
                </div>
                <div className='about_link'>
                    <a href="https://www.credly.com/badges/51d4e1a1-74a0-4449-b779-b1dec61746af/public_url" target="_blank" rel="noopener noreferrer">
                        Certificada AWS Cloud Practitioner 
                    </a>
                </div>
            </div>
            <div className='skills'>
                <h2>Habilidades</h2>
                <div className='cards'>
                    <Card text={"HTML5"} icon={<FaHtml5 />}/>
                    <Card text={"CSS3"} icon={<FaCss3Alt />}/>
                    <Card text={"JAVASCRIPT"} icon={<IoLogoJavascript />}/>
                    <Card text={"NODEJS"} icon={<FaNodeJs />}/>
                    <Card text={"JQUERY"} icon={<DiJqueryLogo />}/>
                    <Card text={"PYTHON"} icon={<FaPython />}/>
                    <Card text={"PHP"} icon={<SiPhp />}/>
                    <Card text={"FLUTTER"} icon={<SiFlutter />}/>
                    <Card text={"POSTGRESQL"} icon={<BiLogoPostgresql />}/>
                    <Card text={"SQLITE"} icon={<SiSqlite />}/>
                    <Card text={"DOCKER"} icon={<FaDocker />}/>
                    <Card text={"AWS"} icon={<FaAws />}/>
                    <Card text={"FIGMA"} icon={<IoLogoFigma />}/>
                    <Card text={"STYLED COMPONENTS"} icon={<SiStyledcomponents />}/>
                    <Card text={"GIT"} icon={<FaGitAlt />}/>
                    <Card text={"REACT"} icon={<FaReact />}/>
                </div>
            </div>
        </H.Section>
        <Footer/>
    </>
  )
}

