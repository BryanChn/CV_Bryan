import React from "react";
import ButtonHeader from "./ButtonHeader";
import moi from "../../assets/Me.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Bonjour je suis</h5>
        <h1>Chaine Bryan</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <ButtonHeader />
        <HeaderSocial />
        <div className="moi">
          <img src={moi} alt="Hello !" />
        </div>
        <a href="#Contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
