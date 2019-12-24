import React from "react";
import Header from "./Header";
// import { Link } from "@reach/router";

const ErrorShower = err => {
  return (
    <div>
      <header>
        <Header user={err.err.user} />
      </header>
      {console.log(err)}
      <h1>{err.err.status}</h1>
      <h2>{err.err.msg}</h2>
    </div>
  );
};

export default ErrorShower;
