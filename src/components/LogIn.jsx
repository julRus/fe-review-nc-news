import React from "react";
import SignUp from "./SignUp";

export default class LogIn extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <>
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
          <SignUp user={user} className="signup" />
        </main>
      </>
    );
  }
}
