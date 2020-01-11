import React from "react";
import { Link } from "@reach/router";

const ArticleCard = props => {
  const { id, date, topic, comments, title } = props;
  return (
    <>
      <Link to={`/articles/${id}`} className="article_link">
        <div className="article_card_container" id={id.toString()}>
          <div className="article_container">
            <li className="article_card">
              <p className="article_card_date_tag">. {date}</p>
              <p className="article_card_topic_tag">{topic}</p>
              <p className="article_card_comment_tag">{comments} comments</p>
              <p className="article_card_title"> {title}</p>
            </li>
          </div>
        </div>
      </Link>
    </>
  );
};
export default ArticleCard;
