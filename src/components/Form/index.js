import React, { useState } from 'react';

import { Form } from './styled';

import axios from '../../services/axios';


export default function FormComponent(){
    const [name, setName] = useState('');

    async function handleSubmit(e){
      e.preventDefault();
      let formErrors = false;
      console.log({name});

      if(formErrors){
        return;
      }
      try {
        const response = await axios.post('/category', {
          name,
        })
        console.log(response.data);
      } catch (e){

      }

    }

    return(
      <>
        <Form onSubmit={handleSubmit}>
          <label htmlFor='name'>
            <input  type='text'
            value={name}
            onChange ={e => setName(e.target.value)}
            placeholder ="Digite o nome da Categoria"
            />
          </label>

          <button type="submit"> Cadastrar </button>
        </Form>

        </>
    );
}
