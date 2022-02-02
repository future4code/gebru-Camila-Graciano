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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

      <Post 
nomeUsuario={'Julio.c'}
fotoUsuario={'https://picsum.photos/id/1009/50/50'}
fotoPost={'https://picsum.photos/id/1004/200/150'}
      />

<Post 
nomeUsuario={'Zenaide'}
fotoUsuario={'https://picsum.photos/id/1011/50/50'}
fotoPost={'https://picsum.photos/id/102/200/150'}
      />
      </MainContainer>
    );
  }
}

export default App;
