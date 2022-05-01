import React from "react";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="Experience">
      <h5>Skills</h5>
      <h2>Mon expérience</h2>
      <div className="experience_container">
        <div className="experience_frontend">
          <h3>
            {" "}
            <BsPatchCheckFill /> FrontEnd Development
          </h3>
          <div className="experience_content">
            <article className="experience_detail">
              <h4 className="text-light">HTML</h4>

              <h4 className="text-light">CSS/Sass</h4>

              <h4 className="text-light">Angular</h4>

              <h4 className="text-light">React/React Native</h4>
            </article>
          </div>
        </div>
        {/* parti back */}
        <div className="experience_backend">
          <h3>
            {" "}
            <BsPatchCheckFill /> BackEnd Development
          </h3>
          <div className="experience_content">
            <article className="experience_detail">
              <h4 className="text-light">MYSQL</h4>

              <h4 className="text-light">Java</h4>
              <h4 className="text-light">NestJs</h4>
            </article>
          </div>
        </div>
        {/* parti langue */}
        <div className="experience_speak">
          <h3>
            {" "}
            <BsPatchCheckFill /> Langues
          </h3>
          <div className="experience_content">
            <article className="experience_detail">
              <h4 className="text-light">Français</h4>
              <h4 className="text-light">Anglais</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
