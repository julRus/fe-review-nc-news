import React from "react";
import SignUp from "./SignUp";

export default class LogIn extends React.Component {
  render() {
    return (
      <>
        {/* <header>
          <Header user={this.props.user} />
        </header> */}
        <main className="logsignin">
          <form className="login">
            LogIn <br />
            <label>
              Username
              <input type="text" />
            </label>{" "}
            <br />
            <label>
              Password
              <input type="password" />
            </label>{" "}
            <br />
            <button>Log In</button>
          </form>
          <SignUp user={this.props.user} className="signup" />
        </main>
      </>
    );
  }
}
