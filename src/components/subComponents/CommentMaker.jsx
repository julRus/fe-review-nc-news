import React from "react";
import * as api from "../../api";

export default class CommentMaker extends React.Component {
  state = {
    comment: { username: this.props.user.username, body: "" },
    hasCommented: true
  };
  render() {
    const { comment } = this.state;
    return (
      <>
        <main>
          <form
            onSubmit={event => this.createComment(event)}
            className="post_comment"
          >
            <p className="post_comment_title">Post a Comment</p>
            <br />
            <label>
              <textarea
                rows="10"
                cols="15"
                placeholder="Comment Content"
                required
                className="post_comment_box"
                value={comment.body}
                onChange={event => this.handleChange(event)}
              ></textarea>
            </label>{" "}
            <br />
            <button className="post_comment_button">Submit</button>
          </form>
        </main>
      </>
    );
  }

  handleChange(event) {
    const body = event.target.value;
    const user = this.props.user;
    this.setState({ comment: { username: user.username, body: body } });
  }

  createComment(event) {
    const { comment } = this.state;
    event.preventDefault();
    this.setState({
      comment: { username: null, body: "" },
      hasCommented: true
    });
    api.postComment(comment, this.props.article_id).then(comment => {
      this.props.addComment(comment.comment);
    });
  }
}
