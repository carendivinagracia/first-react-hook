import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <Link to="/hooks" style={{ color: "#ffffff" }}>
          Redirect me to Hooks ->
        </Link>
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
          Edit <code>src/components/Home</code> and save to reload.
        </p>
        <a
          className="Home-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
