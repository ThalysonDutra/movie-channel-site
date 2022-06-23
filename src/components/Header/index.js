import React from "react";
import { FaHome } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { FaFilm } from 'react-icons/fa';
import { Nav } from "./styled";

export default function Header() {
  return (
    <>
      <Nav>
        <div className="title">
          <h1>Movie Channel</h1>
        </div>

        <div className="menu">
          <div className="menu-item">
            <FaHome size={24} className="menu-item"/>
            <a href="/">  Home </a>

            <FaFilm size={24} className="menu-item"/>
            <a href="/createcategory">  Filmes</a>

            <MdLogout size={24} className="menu-item"/>
            <a href="https://www.google.com.br/">  Logout</a>

          </div>
        </div>
      </Nav>
    </>
  );

}
