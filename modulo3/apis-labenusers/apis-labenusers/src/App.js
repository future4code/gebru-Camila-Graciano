import React from "react";
import SignUpScreen from "./components/SignUpScreen";
import UsersListScreen from "./components/UsersListScreen";

export default class App extends React.Component {
  state = {
    renderedScreen: "signUp"
  };

  changePage = () => {
    if (this.state.renderedScreen === "signUp") {
      this.setState({ renderedScreen: "users" });
    } else {
      this.setState({ renderedScreen: "signUp" });
    }
  };

  render() {
    return (
      <div>
        <h2> LabenUsers </h2>
        {this.state.renderedScreen === "signUp" ? <SignUpScreen /> : <UsersListScreen />}
        <br/>
        <button onClick={this.changePage}>Tela de usuários </button>
      </div>
    );
  }
}