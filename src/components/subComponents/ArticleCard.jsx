import React from "react";
import { Link } from "@reach/router";

const ArticleCard = props => {
  return (
    <>
      <Link to={`/articles/${props.id}`} className="article_link">
        <div className="article_card_container" id={props.id.toString()}>
          <div className="article_container">
            <li className="article_card">
              {/* <img
            src="https://cdn2.vectorstock.com/i/1000x1000/42/71/temporary-film-job-text-background-word-cloud-vector-16054271.jpg"
            alt="article"
            className="article_card_img"
          /> */}
              <p className="article_card_date_tag">. {props.date}</p>
              <p className="article_card_topic_tag">{props.topic}</p>
              <p className="article_card_comment_tag">
                {props.comments} comments
              </p>
              <p className="article_card_title"> {props.title}</p>
              {/* <img
              src="https://seeklogo.net/wp-content/uploads/2017/04/abc-news-logo-01.png"
              alt="logo"
              className="logo_card"
            /> */}
            </li>
          </div>
        </div>
      </Link>
    </>
  );
};
export default ArticleCard;
