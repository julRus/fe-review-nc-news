import axios from "axios";

const baseURL = "https://nc-news-julia.herokuapp.com/api";

export const getArticles = (sort_term, topicName) => {
  // const queryOne = topicName ? `?topic=${topicName}` : ``;
  // const queryTwo = sort_term ? `?sort_by=${sort_term}` : ``;
  return axios
    .get(`${baseURL}/articles`, {
      params: { topic: topicName, sort_by: sort_term }
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getArticleById = id => {
  return axios.get(`${baseURL}/articles/${id}`).then(({ data }) => {
    return data.article;
  });
};

export const getArticleComments = id => {
  return axios.get(`${baseURL}/articles/${id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const patchArticleVotes = (id, amnt, endpoint, commentId) => {
  const path = endpoint ? `/comments/${commentId}` : `/articles/${id}`;
  return axios
    .patch(`${baseURL}/${path}`, { inc_votes: amnt })
    .then(({ data }) => {
      return data;
    })
    .catch(console.log);
};

export const postComment = (comment, id) => {
  // console.log(comment);
  return axios
    .post(`${baseURL}/articles/${id}/comments`, {
      username: comment.username,
      body: comment.body
    })
    .then(({ data }) => {
      return data;
    })
    .catch(console.log);
};

export const deleteComment = (author, id) => {
  return axios.delete(`${baseURL}/comments/${id}`);
};

export const fetchTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({ data }) => {
    return data.topics;
  });
};
