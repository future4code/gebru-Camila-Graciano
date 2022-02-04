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
    ]
  }


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
        {listaDePosts}
      </MainContainer>
    );
  }
}

export default App;
