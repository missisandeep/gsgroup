import React from "react";
import Nav from "./Nav";
import TopBar from "./TopBar";

const Header = () => {
  return (
    <header>
      <TopBar />
      <div className="container">
        <Nav />
      </div>
    </header>
  );
};

export default Header;
