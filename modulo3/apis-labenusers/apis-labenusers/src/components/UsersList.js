import React from "react";
import axios from "axios";
import UserDetail from "./UserDetail";


const axiosConfig = {
  headers: {
    Authorization: "camila-graciano-gebru"
  }
};

class UsersList extends React.Component {
  state = {
    usersList: [],
    renderedScreen: "usersList",
    userId: "",
    name: ""
  };

  componentDidMount() {
    this.fetchUsersList();
  }

  fetchUsersList = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        axiosConfig
      )
      .then(response => {
        this.setState({ usersList: response.data });
      });
  };

  handleUserDeletion = (userId) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Tem certeza que deseja apagar o usuário?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
          axiosConfig
        )
        .then(() => {
          alert("Usuário apagado com sucesso!");
          this.fetchUsersList();
        })
        .catch(e => {
          alert("ERRO AO APAGAR USUARIO");
        });
    }
  };

  changePage = (userId) => {
    if (this.state.renderedScreen === "usersList") {
      this.setState({ renderedScreen: "userDetail", userId: userId });
    } else {
      this.setState({ renderedScreen: "usersList", userId: "" });
    }
  };

  handleNameChange = (event) => {
    const newNameValue = event.target.value;

    this.setState({ name: newNameValue });
  };

  handleSearchUser = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${
          this.state.name
        }&email=`,
        axiosConfig
      )
      .then(response => {
        this.setState({ usersList: response.data });
      })
      .catch(error => {
        alert("Erro ao criar o usuário");
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        {this.state.renderedScreen === "usersList" ? (
          <div>
            <ul>
              {this.state.usersList.length === 0 && <div>Carregando...</div>}
              {this.state.usersList.map(user => {
                return (
                  <li>
                    <span onClick={() => this.changePage(user.id)}>
                      {user.name}
                    </span>
                    <button
                      onClick={() => this.handleUserDeletion(user.id)}
                    >
                      X
                    </button>
                  </li>
                );
              })}
            </ul>
            <hr />
            <h4>Procurar usuário</h4>
            <input
              placeholder="Nome exato para busca"
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <button onClick={this.handleSearchUser}>Salvar edição</button>
          </div>
        ) : (
          <UserDetail userId={this.state.userId} changePage={this.changePage} />
        )}
      </div>
    );
  }
}

export default UsersList;
