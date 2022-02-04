import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    postState: [
      { id: 1, nomeUsuario: 'paulinha', fotoUsuario: 'https://picsum.photos/50/50', fotoPost: 'https://picsum.photos/200/150' },
      { id: 2, nomeUsuario: 'Julio.c', fotoUsuario: 'https://picsum.photos/id/1009/50/50', fotoPost: 'https://picsum.photos/id/1004/200/150' },
      { id: 3, nomeUsuario: 'Zenaide', fotoUsuario: 'https://picsum.photos/id/1011/50/50', fotoPost: 'https://picsum.photos/id/102/200/150' }
    ],
    valorInputUser: "",
    valorInputFoto: "",
    valorInputPost: ""
  }


  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputUser,
      fotoUsuario: this.state.valorInputFoto,
      fotoPost: this.state.valorInputPost
    };

    const novosPosts = [...this.state.postState, novoPost];

    this.setState({ postState: novosPosts });
    this.setState({     valorInputUser: "", valorInputFoto: "", valorInputPost: "" });
  };

  onChangeInputUser = (event) => {
    this.setState({ valorInputUser: event.target.value });
  };

  onChangeInputFoto = (event) => {
    this.setState({ valorInputFoto: event.target.value });
  };

  onChangeInputPost = (event) => {
    this.setState({ valorInputPost: event.target.value });
  };


  render() {
    const listaDePosts = this.state.postState.map((post) => {
      return <Post
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
      />
    });

    return (
      <MainContainer>
      <input 
      value={this.state.valorInputUser}
      onChange={this.onChangeInputUser}
      placeholder={"Seu Usuário"}
    />
    <input 
      value={this.state.valorInputFoto}
      onChange={this.onChangeInputFoto}
      placeholder={"Link Foto de perfil"}
    />
    <input 
      value={this.state.valorInputPost}
      onChange={this.onChangeInputPost}
      placeholder={"Foto do Post"}
    />

    <button onClick={this.adicionaPost}>Postar</button>
    {listaDePosts}
    </MainContainer>
    );
  }
}

export default App;
