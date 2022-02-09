import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
display: flex;
flex-direction: column;
width: 40%;
heigth: 100vh;
border: 2px solid black;
margin: 0 auto; 
`

class Etapa1 extends React.Component {


  render() {
  return (
    <>
          <Header>
              <h1> Informações Gerais de Ensino </h1>
          </Header>

      <label></label>
      <input placeholder='Curso graduação' />
      <label></label>
      <input placeholder='Curso complementar' />
      <option value=" "> Nenhum </option>
      <option value=" "> Ensino médio completo </option>
      <option value=" "> Ensino superior incompleto </option>
      <option value=" ">Ensino superior completo </option>
    </>
  );
}
}

export default Etapa1