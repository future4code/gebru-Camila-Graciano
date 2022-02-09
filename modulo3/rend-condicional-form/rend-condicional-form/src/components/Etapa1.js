import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
display: flex;
flex-direction: column;
width: 40%;
height: 80%;
border: 2px solid black;
margin: 0 auto;
align-items: center; 
`
const InputUsuario = styled.input`
display: flex;
flex-direction: column;
width: 25%;
height: 4%;
margin-left: 2%;
margin-bottom: 2%;
`

class Etapa1 extends React.Component {
  render() {
  return (
    <div>
          <Header>
              <h1> Dados Gerais </h1>
      <InputUsuario placeholder='Nome' 
      />
      <InputUsuario placeholder='Idade' />
      <InputUsuario placeholder='Email' />
      <InputUsuario placeholder='Escolaridade'/>
          </Header>
  
    </div>
  );
}
}

export default Etapa1;