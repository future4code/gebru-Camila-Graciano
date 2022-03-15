import React from "react";
import axios from "axios";
import styled from "styled-components";
import logo from '../img/logo.png'

const ImgLogo = styled.img`
  height: 10vh;
  margin-right: 20px;
  margin-left: 30px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 8vh;
  }
`;

const HeaderPrincipal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 98, 5vw;
  height: 11vh;
  background-color: #090a09;
   color:#00BFFF;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 20px;
    width: 100vw;
  }
`;

const MainPrincipal = styled.div`
  color: #00BFFF;
  background-image: url(https://rich-rub.surge.sh/static/media/MusicBlack.717e7e0b.jpg);
  height: 80vh;
  width: 98, 5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  font-size: 50px;
  text-shadow: #00BFFF;
  position: relative;
  display: flex;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 25px;
    width: 100vw;
    height: 110vh;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
const InputPlaylist = styled.input`
  height: 40px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #00BFFF;
  justify-content: center;
  text-align: center;
  align-items: center;
  display: flex;
  color: #00BFFF;
  font-size: 35px;
  margin: auto;
  margin-top: 44px;
  width: 500px;
  :focus {
    outline: none;
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 25px;
    display: flex;
    text-align: center;
    justify-content: center;
    width: 250px;
  }
`;
const ButtonPlaylist = styled.button`
  display: flex;
  margin: auto;
  margin-top: 40px;
  padding: 15px;
  width: 200px;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  flex-direction: column;
  border-radius: 15px;
  border: 1px solid gray;
  height: 60px;
  background-image: linear-gradient(to left,#4682B4, #87CEFA, #00BFFF);
  color: black;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 15px;
    width: 150px;
  }
`;
const FooterList = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background-color: #090a09;
  color: white;
  height: 11vh;
  width: 98, 5vw;
  color: #00BFFF;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 100vw;
    font-size: 10px;
  }
`;

const headers = {
  headers: {
    Authorization: "camila-graciano-gebru",
  },
};

class CriarPlaylist extends React.Component {
  state = {
    nomePlaylist: "",
  };

  criaPlaylist = (event) => {
    this.setState({ nomePlaylist: event.target.value });
  };

  criarPlaylist = () => {
    const body = {
      name: this.state.nomePlaylist,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        headers
      )
      .then((resposta) => {
        console.log(resposta);
        this.setState({ nomePlaylist: "" });
        alert ("A Playlist foi criada com sucesso!");
      })
      .catch((erro) => {
        alert ("Ops, algo deu errado!");
        console.log(erro);
      });
  };

  render() {
    return (
      <div>
        <HeaderPrincipal>
        <ImgLogo src= {logo}/>
      
          <h1>Labefy</h1>
        </HeaderPrincipal>

        <MainPrincipal>
          <div>
            <h2>Criar PlayList</h2>
            <InputPlaylist
              placeholder={"Nome da Playlist"}
              value={this.state.nomePlaylist}
              onChange={this.criaPlaylist}
            />
            <ButtonPlaylist onClick={this.criarPlaylist}>
              Criar Playlist
            </ButtonPlaylist>

            <ButtonPlaylist onClick={this.props.irParaLista}>
              Ir para Lista de Playlist
            </ButtonPlaylist>
          </div>
        </MainPrincipal>

       <FooterList>
           2022 All rights reserved.
          <p>Desenvolvido pela estudante da Turma Gebru: Camila Graciano </p>
        </FooterList> 
      </div>
    );
  }
}

export default CriarPlaylist;