import React, { useState } from 'react';
import { Link } from "react-router-dom";
import * as S from "./header_style";
import Logo from "../../assets/logo.png"

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <S.Header>
        <div>
            <img src={Logo} alt="Logo Lívia Alves" />
            <p>Portfólio</p>
            <button onClick={() => setMenu(!menu)}>{menu ? "✖" : "☰"}</button>
        </div>
        {menu && (
            <>
                <ul>
                    <li>
                        <Link className={"link"} to={"/"}>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={"link"} to={"/sobre"}>
                            <span>Sobre</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={"link"} to={"/projetos"}>
                            <span>Projetos</span>
                        </Link>
                    </li>
                </ul>
            </>
        )}
    </S.Header>
  )
}
