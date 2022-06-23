import styled from 'styled-components';

export const Form = styled.form`

  margin: 5px 15px;
  display: flex;
  flex-direction: column;


  input {
    width: 300px;
    height: 30px;
    background-color: #ADD8E6 ;
    border-radius: 3px;
    border: 1px solid #ddd;
    flex-direction: column;
    padding: 0 7px;

    &:focus{
      border: 1 px solid #4682B4;
    }
    margin:5px 0;
  }

  button {
    width: 150px;
    height: 30px;
    background-color: #4682B4 ;
    border-radius: 3px;
    border: none;
    color: #fff;
    transition: all 300ms;
    margin: 10px 10px;

  }

  button:hover{
    filter: brightness(75%);
  }

  label{
    font-size: 15px;
    display:flex;
    flex-direction: column;
    margin: 10px 10px;
    padding: 0 px;
  }
`;
