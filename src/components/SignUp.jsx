import React from "react";
import Header from "./Header";

export default class SignUp extends React.Component {
  render() {
    return (
      <>
        <header>
          <Header user={this.props.user} />
        </header>
        <main>
          <form>
            Sign up <br />
            <label>
              Username
              <input type="text" />
            </label>
            <br />
            <button>Sign up</button>
          </form>
        </main>
      </>
    );
  }
}
