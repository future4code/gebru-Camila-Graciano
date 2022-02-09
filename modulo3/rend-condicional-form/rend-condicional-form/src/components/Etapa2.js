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

class Etapa2 extends React.Component {


  render() {
  return (
    <>
          <Header>
              <h1> Informações do Ensino Superior </h1>
          </Header>

      <label></label>
      <input placeholder='Curso' />
      <label></label>
      <input placeholder='Unidade' />
      <label></label>
    </>
  );
}
}

export default Etapa2