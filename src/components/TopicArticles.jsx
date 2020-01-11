import React from "react";
import Header from "../components/Header";
import ArticleFeeder from "./ArticleFeeder";

export default class TopicArticles extends React.Component {
  render() {
    const { slug, desc } = this.props.location.state;
    const { user } = this.props;
    return (
      <>
        <header>
          <Header user={user} />
        </header>
        <main>
          <section>
            <div className="Topic" id={`${slug}_articles`}>
              <p id="topic_articles_slug">{slug}</p>
              <p id="topic_articles_desc">{desc}</p>
            </div>
            <ArticleFeeder slug={slug} />
          </section>
        </main>
      </>
    );
  }
}
