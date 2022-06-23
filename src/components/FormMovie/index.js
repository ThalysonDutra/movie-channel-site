import React, { useState } from 'react';

import { Form } from './styled'

import axios from '../../services/axios';


export default function MovieComponent(){
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [duration, setDuration] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState('');


    async function handleSubmit(e){
      e.preventDefault();
      let formErrors = false;
      console.log({name});

      if(formErrors){
        return;
      }
      try {
        const response = await axios.post('/movie', {
          name,
          year,
          duration,
          description,
          categoryId
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
            placeholder ="Digite o nome do Filme"
            />
          </label>

          <label htmlFor='year'>
            Ano
            <input  type= 'number'
            value={year}
            onChange ={e => setYear(e.target.value)}
            placeholder ="Digite o ano de lançamento do filme"
            />
          </label>

          <label htmlFor='duration'>
            Duração
            <input  type= 'number'
            value={duration}
            onChange ={e => setDuration(e.target.value)}
            placeholder ="Digite a duração do filme em minutos"
            />
          </label>

          <label htmlFor='description'>
            Descrição
            <input  type= 'text'
            value={description}
            onChange ={e => setDescription(e.target.value)}
            placeholder ="Digite a descrição do filme"
            />
          </label>

          <label htmlFor='categoryId'>
            Id da categoria
            <input  type= 'number'
            value={categoryId}
            onChange ={e => setCategoryId(e.target.value)}
            placeholder ="Digite o id da categoria associada"
            />
          </label>

          <button type="submit"> Cadastrar </button>
        </Form>

        </>
    );
}
