import React from "react";
import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { MdContactMail } from "react-icons/md";
import { useState } from "react";

const Nav = () => {
  const [navActive, setNavActive] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setNavActive("#")}
        className={navActive === "#" ? "active" : ""}
      >
        <FaHome />
      </a>
      <a
        href="#About"
        onClick={() => setNavActive("#About")}
        className={navActive === "#About" ? "active" : ""}
      >
        <FaUserAlt />
      </a>
      <a
        href="#Experience"
        onClick={() => setNavActive("#Experience")}
        className={navActive === "#Experience" ? "active" : ""}
      >
        <MdMenuBook />
      </a>
      <a
        href="#Contact"
        onClick={() => setNavActive("#Contact")}
        className={navActive === "#Contact" ? "active" : ""}
      >
        <MdContactMail />
      </a>
    </nav>
  );
};

export default Nav;
