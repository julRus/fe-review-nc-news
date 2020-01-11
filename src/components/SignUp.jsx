import React from "react";
import Header from "./Header";

export default class SignUp extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <>
        <header>
          <Header user={user} />
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
