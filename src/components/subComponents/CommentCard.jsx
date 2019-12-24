import React from "react";

const CommentCard = props => {
  const { date, author, body, votes } = props;
  return (
    <>
      <li className="comment">
        <div className="comment_header">
          <p className="comment_author">{author}</p>
          <p className="comment_votes">{votes}</p>
          <p className="comment_date">{date}</p>
        </div>
        <p className="comment_body">{body}</p>
      </li>
    </>
  );
};

export default CommentCard;
