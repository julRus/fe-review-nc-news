import React from "react";
import * as api from "../../api";

export default class VotesIncrementer extends React.Component {
  state = {
    hasVotedUp: false,
    text: "VOTE 👍"
  };
  render() {
    const { text } = this.state;
    return (
      <>
        <button
          onClick={() => this.incrementVotes(this.props)}
          className="article_votes_button"
        >
          <span role="img" aria-label="thumbsUp">
            {text}
          </span>
        </button>
      </>
    );
  }

  incrementVotes(prop) {
    const { hasVotedUp } = this.state;
    if (hasVotedUp === false) {
      if (prop.name === "articleVoter") {
        prop.displayVote(prop.commentId, 1, "voteChangeArticle");
        api.patchArticleVotes(prop.id, 1).then(() => {
          this.setState({ hasVotedUp: true, text: "UNVOTE 👎" });
        });
      } else if (prop.name === "comments") {
        prop.displayVote(prop.commentId, 1, "voteChangeComment");
        api
          .patchArticleVotes(prop.id, 1, prop.name, prop.commentId)
          .then(() => {
            this.setState({ hasVotedUp: true, text: "UNVOTE 👎" });
          });
      }
    } else {
      if (prop.name === "articleVoter") {
        prop.displayVote(prop.commentId, 0, "voteChangeArticle");
        api.patchArticleVotes(prop.id, -1).then(() => {
          this.setState({ hasVotedUp: false, text: "VOTE 👍" });
        });
      } else if (prop.name === "comments") {
        prop.displayVote(prop.commentId, -1, "voteChangeComment");
        api
          .patchArticleVotes(prop.id, -1, prop.name, prop.commentId)
          .then(() => {
            this.setState({ hasVotedUp: false, text: "VOTE 👍" });
          });
      }
    }
  }
}
