import React from 'react';
import * as S from "./footer_style";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";


export default function Footer() {

  return (
    <S.Footer>
        <div>
            <a href="mailto:liviamabelle@gmail.com" target="_blank" rel="noopener noreferrer">
                <MdEmail />
            </a>
            <a href="https://www.linkedin.com/in/livia--alves/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a href="https://github.com/livalves" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
        </div>
    </S.Footer>
  )
}
