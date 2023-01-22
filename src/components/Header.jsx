import React from "react";
import Logo from "../img/logo.svg";

const Header = () => {
  return (
    <header className="header d-flex align-items-center mb-4">
      <div className="container-fluid">
        <a target="_blank" href="http://unotelemedicina.com.br/">
          <img className="custom-size-img" src={Logo} />
        </a>
      </div>
    </header>
  );
};

export default Header;
