import React from "react";
import { Title } from "./styled";

import Header from "../../components/Header";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import FormUser from "../../components/FormUser"

export default function CreateMovie(){
  return (
    <React.Fragment>
    <Header/>
      <Title >
        <h1> Cadastro de Usuários</h1>
        <FormUser />
      </Title>
    <Footer />
  </React.Fragment>
  );
}
