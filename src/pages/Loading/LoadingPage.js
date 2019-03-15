import React from "react";
import logo from "../../assets/images/rebel.png";
import "./Loading.css";

const LoadingPage = () => (
  <div className="Loading">
    <header className="Loading-header">
      <img src={logo} className="Loading-logo" alt="logo" />
      <p>Page is loading...</p>
    </header>
  </div>
);

export default LoadingPage;
