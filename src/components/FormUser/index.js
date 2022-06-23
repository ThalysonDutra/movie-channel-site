import React, { useState } from 'react';


import { Form } from './styled'

import axios from '../../services/axios';


export default function UserComponent(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState('');



    async function handleSubmit(e){
      e.preventDefault();
      let formErrors = false;
      console.log({isAdmin});

      if(formErrors){
        return;
      }
      try {
        const response = await axios.post('/user', {
          name,
          email,
          password,
          isAdmin,
        })
        console.log(response.data);
      } catch (e){

      }

    }

    return(
      <>
        <Form onSubmit={handleSubmit}>
          <label htmlFor='name'>
            Nome
            <input  type='text'
            value={name}
            onChange ={e => setName(e.target.value)}
            placeholder ="Digite o seu nome"
            />
          </label>

          <label htmlFor='email'>
            E-mail
            <input  type= 'email'
            value={email}
            onChange ={e => setEmail(e.target.value)}
            placeholder ="Digite seu e-mail"
            />
          </label>

          <label htmlFor='password'>
            Senha
            <input  type= 'password'
            value={password}
            onChange ={e => setPassword(e.target.value)}
            placeholder ="Digite uma senha"
            />
          </label>

          <label htmlFor='isAdmin'>
            Tipo de usuário
            <input  type= 'boolean'
            value={isAdmin}
            onChange ={e => setIsAdmin(e.target.value)}
            placeholder ="Digite 1 para perfil Admin e 0 para perfil Regular"
            />
          </label>

          <button type="submit"> Cadastrar </button>
        </Form>

        </>
    );
}
