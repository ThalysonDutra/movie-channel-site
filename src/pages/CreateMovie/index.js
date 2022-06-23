import React from "react";
import { Title } from "./styled";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FormMovie from "../../components/FormMovie";

export default function CreateMovie(){
  return (
    <React.Fragment>
      <Header/>
        <Title >
          <h1> Cadastro de Filme </h1>
          <FormMovie />
        </Title>
      <Footer />
    </React.Fragment>
  );
}
