import React from "react";
import Header from "./Header";

const ErrorShower = err => {
  return (
    <div>
      <header>
        <Header user={err.err.user} />
      </header>
      <h1>{err.err.status}</h1>
      <h2>{err.err.msg}</h2>
    </div>
  );
};

export default ErrorShower;
