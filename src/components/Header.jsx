import React from "react";
import { Link } from "@reach/router";

const Header = ({ user }) => {
  if (user.password) {
    return (
      <>
        {/* <section className="sub_header">
          <img
            src="https://seeklogo.net/wp-content/uploads/2017/04/abc-news-logo-01.png"
            alt="logo"
            className="logo"
          /> */}
        {/* <h2 className="sub_heading">BRINGING YOU THE BEST OF FAKE NEWS!</h2> */}
        {/* </section> */}
        <nav className="nav">
          <ul className="nav_content">
            <Link to="/" className="nav_link_home" id="nav_link">
              <i
                className="fa fa-home"
                // onMouseOver={event => {
                //   chbg(event);
                // }}
              >
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

// const styleIt = event => {
//   const className = event.target.children[0].className;
//   return (
//     <style
//       p={{
//         __html: `
//       .styled { display: inline }
//     `
//       }}
//     />
//   );
// };

// const chbg = event => {
//   const className = event.target.children[0].className;
//   {
//     document.getElementByClassName(className).style.display = "inline";
//   }
// };

export default Header;
