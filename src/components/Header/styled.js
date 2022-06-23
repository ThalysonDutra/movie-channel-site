import styled from "styled-components";

export const Nav = styled.nav`
  background: #4682B4 ;
  padding: 20px;
  display: flex;
  justify-content: space-between;


  a{
    color: black;
    margin: 0 5px 0;
    font-weight: bold;
    text-decoration: none;
    box-direction: none;
    color: #fff;
    font-size: 18px;
    align-items: center;
  }

  h1{
    font-family: sans-serif;
    font-size: 30px;
  }

  .title{
    margin: 0 30px;
    justify-content: center;
    align-items: center;
  }

  .menu{
    margin: auto 30px;
  }
  .menu-item{
    color: #fff;
    vertical-align: bottom;
    margin: auto 2.5px;

  }

  .menu-item a{
    vertical-align: bottom;
    margin: auto 2.5px;

  }

`;
