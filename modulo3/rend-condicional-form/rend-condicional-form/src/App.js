import React from 'react'
import styled from 'styled-components'
import './App'
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2' 
import Etapa3 from './components/Etapa2' 
import Final from './components/Final'

const Button = styled.button`
margin: auto;
text-align: center;
`
class App extends React.Component {

  render() {
  return (
    <>
   <div>
     <Etapa1></Etapa1>
     </div>
     <div>
   <Button>Próxima etapa</Button>
   </div>
    </>
    );
  }
}

export default App;
