import React from "react";

import ArticleFeeder from "../components/ArticleFeeder";
import Header from "./Header";

const Homepage = ({ user }) => {
  return (
    <div>
      <header>
        <Header user={user} />
      </header>
      <main className="article_feed">
        <ArticleFeeder user={user} />
      </main>
    </div>
  );
};

export default Homepage;
