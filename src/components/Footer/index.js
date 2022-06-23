import React from "react";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';

import { Footer } from "./styled";

export default function FooterComponent() {
  return (
    <>
      <Footer>
        <div className="menu">
          <a href="https://www.google.com.br/"> <FaInstagram /> </a>
          <a href="https://www.google.com.br/"> <FaFacebook /> </a>
          <a href="https://www.google.com.br/"> <FaYoutube /> </a>
          <a href=""> <FaTwitter /> </a>
        </div>
      </Footer>
    </>
  );

}
