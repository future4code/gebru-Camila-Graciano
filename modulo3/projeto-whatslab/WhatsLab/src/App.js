import React from 'react'
import styled from 'styled-components'

const BoxMensagem = styled.div`
display: flex;
width: 50vw;
margin: 1% auto;
max-width: 70%;
min-width: 8%;
align-items: flex-end;
height: 90vh;
margin-bottom: 1em;
word-wrap: break-word;
padding: 0.9em 0.8em;
  font-weight: 450;
  line-height: 1.3;
  box-shadow: 1px 3px 3px 1px ;
  background: #FFC0CB;
`

const InputUsuario = styled.input`
display: flex;
flex-direction: column;
width: 25%;
height: 4%;
margin-left: 2%;
background: #FFC0CB ;
`
const InputMsg = styled.input`
display: flex;
flex-direction: column;
width: 70%;
height: 4%;
margin-left: 2%;
background: #FFC0CB;
`
 const Button = styled.button`
 display:flex;
 flex-direction: column;
 width: 15%;
 height: 5%;
 margin-left:2%;
 text-align: justify;
 align-items: center;
 color: white;
 background: #FF1493;
 padding: 0.9em 0.8em;
  font-weight: 200;
  line-height: 0.3;
 `
 const Mensagem = styled.div`
 display: flex;
 align-self:flex-end;
 margin-bottom: 20%;
 flex-direction: column;
 `

class app extends React.Component {

  state = {
    mensagens: [
     {
       usuario: "",
       mensagem: ""
     }
    ],

    valorInputUsuario: "",
    valorInputMensagem: ""
  }

  //Adicionar nova mensagem
  adicionarMensagem = ()=>{

    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem
    };

    const novaMensagens = [...this.state.mensagens, novaMensagem];

    this.setState({ mensagens: novaMensagens })

    this.setState({ 
      valorInputMensagem: "",
      valorInputusuario: ""
    });
  }

//Limpar os inputs 
  onchangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value})
  }
  onchangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value })
  };

  render() {

    const listaDeCoteudo = this.state.mensagens.map( (pessoa) => {

      return (
        <div>
         <strong>{ pessoa.usuario }</strong> { pessoa.mensagem }
        </div>
      );
    });

    return (
      <BoxMensagem>
<Mensagem>{listaDeCoteudo}</Mensagem>
        <InputUsuario
        value={this.state.valorInputUsuario}
        onChange={this.onchangeInputUsuario}
        placeholder={"Remetente"}
        />

        <InputMsg 
        value= {this.state.valorInputMensagem}
        onChange={this.onchangeInputMensagem}
        placeholder={"Mensagem"}
        />
        <Button onClick={this.adicionarMensagem}>Enviar</Button>
      </BoxMensagem>
    )
  }

}
export default app
