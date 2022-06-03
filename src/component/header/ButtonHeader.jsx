import React from "react";
import CV from "../../assets/CV.pdf";

const ButtonHeader = () => {
  return (
    <div className="ctb">
      <a href={CV} download={CV} className="btn">
        Télécharger mon CV
      </a>
      <a href="#Contact" className="btn-primary">
        Me contacter
      </a>
    </div>
  );
};

export default ButtonHeader;
