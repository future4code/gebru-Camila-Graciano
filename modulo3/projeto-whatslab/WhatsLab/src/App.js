import React from 'react'
import styled from 'styled-components'

const boxMensagem = styled.div`
  display: flex;
  border: 1px solid gray;
  margin: 8px auto;
  padding: 0 8px;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  height: 100%;
`
class App extends React.Component { 


  render() {

    
  return (
    <boxMensagem>
     <input
     placeholder ={'Rementente'}
     //value={this.state.inputRementente}
     //onchange={this.state.guardaRementente}
     />
     <input
     placeholder ={'Mensagem'}
     //value={this.state.inputRementente}
     //onchange={this.state.guardaRementente}
     />
    <button>ENVIAR</button>
    </boxMensagem>
    
  );
  }
}

export default App;
