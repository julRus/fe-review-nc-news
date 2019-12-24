import React from "react";
import * as api from "../api";

import ArticleCard from "../components/subComponents/ArticleCard";
import ArticleSorter from "../components/subComponents/ArticleSorter";

export default class ArticleFeeder extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    err: null
  };
  render() {
    // const {
    //   user: { username }
    // } = this.props;
    // console.log(username);
    const { articles } = this.state;
    if (this.state.isLoading)
      return <p className="loadIndicator">Loading...</p>;
    if (this.state.err !== null)
      return (
        <>
          <h1>this.state.err.status</h1>
          <h2>this.state.err.msg</h2>
        </>
      );
    return (
      <section className="content">
        <div className="article_sorter">
          <ArticleSorter
            fetchArticles={this.fetchArticles}
            slug={this.props.slug}
          />
        </div>
        <div className="articles">
          <ul
            className="
          "
          >
            <h3 className="articles_title">ARTICLES</h3>
            {articles.map(article => {
              return (
                <ArticleCard
                  key={article.article_id}
                  id={article.article_id}
                  date={article.created_at}
                  topic={article.topic}
                  title={article.title}
                  comments={article.comment_count}
                />
              );
            })}
          </ul>
        </div>
      </section>
    );
  }

  componentDidMount() {
    this.fetchArticles(null, this.props.slug);
  }

  // componentDidUpdate(prevState) {
  //   if (prevState !== this.state) {
  //     this.filterArticlesByTopic(this.props.slug);
  //   }
  // }

  fetchArticles = (sort_term, topic) => {
    api
      .getArticles(sort_term, topic)
      .then(articles => {
        this.setState({ articles: articles, isLoading: false });
      })
      .catch(err => {
        this.setState({
          err: { status: err.response.status, msg: err.response.data.msg },
          isLoading: false
        });
      });
  };

  // filterArticlesByTopic(slug) {
  //   if (slug) {
  //     this.setState(currentState => {
  //       const newState = {
  //         ...currentState
  //       };
  //       console.log(newState);

  //       const topics = newState.articles.filter(article => {
  //         return article.topic === slug;
  //       });

  //       const newNewState = { ...currentState, articles: [...topics] };

  //       return newNewState;
  //     });
  //   }
  // }

  // this.filterArticlesByTopic(this.props.slug)
}
