import React from "react";
import { Link } from "@reach/router";
import Header from "../components/Header";
import * as api from "../api";

export default class TopicFeeder extends React.Component {
  state = {
    topics: []
  };

  render() {
    const { user } = this.props;
    return (
      <>
        <header>
          <Header user={user} />
        </header>
        <main className="topics">
          {this.state.topics.map(topic => {
            return (
              <Link
                className="topic_link"
                to="/topic/articles"
                state={{ slug: topic.slug, desc: topic.description }}
                key={topic.slug}
                J
              >
                <li className="topic_card" id={topic.slug} key={topic.slug}>
                  <div className="topic_tag">
                    {" "}
                    <p id="topic_slug">{topic.slug}</p>
                    <p id="topic_dec">{topic.description}</p>
                  </div>
                </li>
              </Link>
            );
          })}
        </main>
      </>
    );
  }

  componentDidMount() {
    api.fetchTopics().then(topics => {
      this.setState({ topics: topics });
    });
  }
}
