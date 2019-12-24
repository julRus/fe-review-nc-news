import React from "react";
import { Router } from "@reach/router";
import "./App.css";

import Homepage from "./components/Homepage";
import Article from "./components/Article";
import ErrorShower from "./components/ErrorShower";
import LogIn from "./components/LogIn";
import TopicFeeder from "./components/TopicFeeder";
import SignUp from "./components/SignUp";
import CommentMaker from "./components/subComponents/CommentMaker";
import TopicArticles from "./components/TopicArticles";

class App extends React.Component {
  state = {
    user: { username: "jessjelly", password: "abc123" }
  };
  render() {
    return (
      <div className="App">
        <header>
          <Router>
            <Homepage path="/" user={this.state.user} />
            <Article path="/articles/:article_id" user={this.state.user} />
            <CommentMaker path="/post_comment" user={this.state.user} />
            <TopicFeeder path="/topics" user={this.state.user} />
            <TopicArticles path="/topic/articles" user={this.state.user} />
            <LogIn path="/log_in" user={this.state.user} />
            <SignUp path="/sign_up" user={this.state.user} />
            <ErrorShower
              err={{
                status: 404,
                msg: "Route not found",
                user: this.state.user
              }}
              default
            />
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
