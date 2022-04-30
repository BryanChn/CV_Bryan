import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
const HeaderSocial = () => {
  return (
    <div className="header_social">
      <a
        href="https://www.linkedin.com/in/bryan-chaine-36499410b/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/BryanChn" target="_blank" rel="noreferrer">
        <GoMarkGithub />
      </a>
    </div>
  );
};

export default HeaderSocial;
