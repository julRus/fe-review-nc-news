import React from "react";

const ArticleSorter = props => {
  const { fetchArticles } = props;
  const handleCheck = (target, fetchArticles) => {
    fetchArticles(target.value, props.slug);
  };

  return (
    <form className="dropdown">
      <p className="dropdown_title">SORT</p>
      <label className="dropdown_label">
        DATE
        <input
          className="dropdown_input"
          type="radio"
          name="check"
          value="created_at"
          onChange={event => handleCheck(event.target, fetchArticles)}
        />
      </label>{" "}
      <label className="dropdown_label">
        Comments
        <input
          className="dropdown_input"
          type="radio"
          name="check"
          value="comment_count"
          onChange={event => handleCheck(event.target, fetchArticles)}
        />
      </label>
      <label className="dropdown_label">
        Votes
        <input
          className="dropdown_input"
          type="radio"
          name="check"
          value="votes"
          onChange={event => handleCheck(event.target, fetchArticles)}
        />
      </label>
    </form>
  );
};

export default ArticleSorter;
