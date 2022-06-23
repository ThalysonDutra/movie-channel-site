import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Title } from "./styled";
import Form from '../../components/Form';

export default function CreateCategory(){
  return (
    <React.Fragment>
      <Header/>
      <Title >
        <h1> Cadastro de categoria </h1>
        <h2> Nome</h2>
        <Form />
      </Title>
      <Footer />

    </React.Fragment>
  );
}
