import React from "react";
import * as api from "../api";
import Header from "./Header";

import CommentCard from "./subComponents/CommentCard";
import VotesIncrementer from "./subComponents/VotesIncrementer";
import ErrorShower from "../components/ErrorShower";
import CommentMaker from "./subComponents/CommentMaker";

export default class Article extends React.Component {
  state = {
    article: {},
    comments: [],
    isLoading: true,
    err: null,
    voteChangeArticle: 0,
    voteChangeComment: 0
  };

  render() {
    if (this.state.isLoading)
      return <p className="loadIndicator">Loading...</p>;
    if (this.state.err !== null) return <ErrorShower err={this.state.err} />;
    const {
      title,
      created_at,
      author,
      votes,
      body,
      article_id
    } = this.state.article;
    const { comments, voteChangeArticle } = this.state;
    const { user } = this.props;
    return (
      <>
        <header>
          {" "}
          <Header user={this.props.user} />
        </header>
        <main className="article">
          <div>
            <div>
              <h4 className="article_title">{title}</h4>
              <VotesIncrementer
                articleVotes={votes}
                id={article_id}
                displayVote={this.handleVoteChange}
                name="articleVoter"
              />
            </div>

            <div className="article_header">
              {" "}
              <p className="article_author">{author}</p>
              <p className="article_date">{created_at}</p>
              <p className="article_votes" id="voter">
                {(votes + voteChangeArticle).toString()}
              </p>
            </div>
            <p className="article_body">{body}</p>
          </div>
          <p className="comments_title">Comments</p>
          <div>
            <section className="comment_form">
              <CommentMaker
                user={user}
                article_id={article_id}
                comments={comments}
                addComment={this.addComment}
              />
            </section>
            <ul className="comments">
              {comments.map(comment => {
                return (
                  <div key={comment.comment_id}>
                    <VotesIncrementer
                      commentVotes={comment.votes}
                      commentId={comment.comment_id}
                      displayVote={this.handleVoteChange}
                      name="comments"
                    />
                    <CommentCard
                      key={comment.comment_id}
                      id={comment.comment_id}
                      author={comment.author}
                      body={comment.body}
                      date={comment.created_at}
                      votes={comment.votes}
                    />{" "}
                    <button
                      style={{
                        display:
                          comment.author === user.username ? "block" : "none"
                      }}
                      onClick={() =>
                        this.deletionChecker(comment.author, comment.comment_id)
                      }
                      className="comment_Delete_Button"
                    >
                      DELETE
                    </button>
                  </div>
                );
              })}
            </ul>
          </div>
        </main>
      </>
    );
  }

  componentDidMount() {
    const { article_id } = this.props;
    this.fetchArticle(article_id);
    this.fetchComments(article_id);
  }

  fetchArticle(id) {
    api
      .getArticleById(id)
      .then(article => {
        this.setState({ article: article, isLoading: false });
      })
      .catch(err => {
        this.setState({
          err: {
            status: err.response.status,
            msg: err.response.data.msg,
            user: this.props.user
          },
          isLoading: false
        });
      });
  }

  fetchComments(id) {
    const { user } = this.props;
    api
      .getArticleComments(id)
      .then(comments => {
        this.setState({ comments: comments, isLoading: false });
      })
      .catch(err => {
        this.setState({
          err: {
            status: 400,
            msg: `cannot get article of id ${id}, does not exist`,
            user: user
          },
          isLoading: false
        });
      });
  }

  handleVoteChange = (id, amnt, value) => {
    if (value === "voteChangeComment") {
      this.setState(currentState => {
        const newSate = {
          ...currentState,
          comments: [...currentState.comments]
        };
        // eslint-disable-next-line
        newSate.comments.map(comment => {
          if (id === comment.comment_id) {
            comment.votes += amnt;
          }
        });
        return newSate;
      });
    } else {
      this.setState({ voteChangeArticle: amnt });
    }
  };

  deletionChecker(author, id) {
    if (author === this.props.user.username) {
      const willDelete = window.confirm(
        "Are you sure you want to delete this comment?"
      );
      if (willDelete) {
        api.deleteComment(author, id);
        this.deletedComment(id);
      } else {
        alert("deletion cancelled");
      }
    }
  }

  deletedComment(id) {
    this.setState(currentState => {
      const newState = currentState.comments.filter(comment => {
        return id !== comment.comment_id;
      });
      return { comments: newState };
    });
  }

  addComment = comment => {
    this.setState(currentState => {
      const newState = { ...currentState, comments: currentState.comments };
      newState.comments.unshift(comment);
      return newState;
    });
  };
}
