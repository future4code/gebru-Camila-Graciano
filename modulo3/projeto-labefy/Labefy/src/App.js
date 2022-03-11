import React from "react"
import CriarPlaylist from "./components/CriarPlaylist"
import ListaPlaylist from "./components/ListaPlaylist"


class App extends React.Component {

  state = {
    telaPrincipal: "cadastrar"
  }

  escolheTela = () => {
    switch (this.state.telaPrincipal){
      case "cadastrar":
        return <CriarPlaylist irParaLista={this.irParaLista}/>
      case "lista":
        return <ListaPlaylist irParaCadastro={this.irParaCadastro}/>
      default:
        return <div>Erro! Página não encontrada :(</div>
    }
  }

  irParaCadastro = () => {
    this.setState({telaPrincipal: "cadastrar"})
  }

  irParaLista = () => {
    this.setState({telaPrincipal: "lista"})
  }

  render(){ 
    
    return (
      <div>
        {this.escolheTela()}
      </div>
    )
  }

}


export default App;
