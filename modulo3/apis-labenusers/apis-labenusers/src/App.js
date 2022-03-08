import React from "react";
import SignUpPage from "./components/SignUpPage";
import UsersList from "./components/UsersList";


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
        {this.state.renderedScreen === "signUp" ? <SignUpPage /> : <UsersList/>}
       <br/>
        <button onClick={this.changePage}>Trocar de tela</button>
      </div>
    );
  }
}
