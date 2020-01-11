import React from "react";
import { Link } from "@reach/router";

const Header = ({ user }) => {
  if (user.password) {
    return (
      <>
        <nav className="nav">
          <ul className="nav_content">
            <Link to="/" className="nav_link_home" id="nav_link">
              <i className="fa fa-home">
                <p id="home">Home</p>
              </i>
            </Link>
            <Link to="/topics" className="nav_link_topics" id="nav_link">
              <i className="fa fa-book" id="icon">
                <p id="topics">Topics</p>
              </i>
            </Link>
            <Link
              to="/socialMediaLinks"
              className="nav_link_social"
              id="nav_link"
            >
              <i className="fa fa-info" id="icon">
                <p id="social">Social</p>
              </i>
            </Link>
            <Link to="null" className="nav_link_like" id="nav_link">
              <i className="fa fa-heart" id="icon">
                <p id="like">Like</p>
              </i>
            </Link>
            <Link to="/log_in" className="nav_link_user" id="nav_link">
              <i className="fa fa-sign-out" id="icon">
                <p id="user">{user.username}</p>
              </i>
            </Link>
          </ul>
        </nav>
      </>
    );
  }
  return (
    <div>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/topics">Topics</Link>
          <Link to="/socialMediaLinks">SocialMediaLinks</Link>
          <Link to="/sign_up">Sign up</Link>
          <Link to="/log_in">Log in</Link>
        </ul>
      </nav>
      <header>
        <h1>Logo</h1>
        <h2>Description</h2>
      </header>
    </div>
  );
};

export default Header;
