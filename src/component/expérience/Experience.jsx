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
              <RiCheckboxBlankCircleFill /> <RiCheckboxBlankCircleFill />{" "}
              <RiCheckboxBlankCircleFill /> <RiCheckboxBlankCircleFill />{" "}
              <RiCheckboxBlankCircleFill />
              <h4 className="text-light">CSS/Sass</h4>
              <RiCheckboxBlankCircleFill /> <RiCheckboxBlankCircleFill />{" "}
              <RiCheckboxBlankCircleFill /> <RiCheckboxBlankCircleFill />{" "}
              <RiCheckboxBlankCircleLine />
              <h4 className="text-light">Angular</h4>
              <RiCheckboxBlankCircleFill /> <RiCheckboxBlankCircleFill />{" "}
              <RiCheckboxBlankCircleLine /> <RiCheckboxBlankCircleLine />{" "}
              <RiCheckboxBlankCircleLine />
              <h4 className="text-light">React/React Native</h4>
              <RiCheckboxBlankCircleFill /> <RiCheckboxBlankCircleFill />{" "}
              <RiCheckboxBlankCircleFill /> <RiCheckboxBlankCircleLine />{" "}
              <RiCheckboxBlankCircleLine />
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
              <RiCheckboxBlankCircleFill /> <RiCheckboxBlankCircleFill />{" "}
              <RiCheckboxBlankCircleFill /> <RiCheckboxBlankCircleLine />{" "}
              <RiCheckboxBlankCircleLine />
              <h4 className="text-light">Java</h4>
              <RiCheckboxBlankCircleFill /> <RiCheckboxBlankCircleFill />{" "}
              <RiCheckboxBlankCircleLine /> <RiCheckboxBlankCircleLine />{" "}
              <RiCheckboxBlankCircleLine />
              <h4 className="text-light">NestJs</h4>
              <RiCheckboxBlankCircleFill /> <RiCheckboxBlankCircleFill />{" "}
              <RiCheckboxBlankCircleLine /> <RiCheckboxBlankCircleLine />{" "}
              <RiCheckboxBlankCircleLine />
            </article>
          </div>
        </div>
        {/* parti langue */}
        <div className="experience_speak">
          <h3>
            {" "}
            <BsPatchCheckFill /> Langue
          </h3>
          <div className="experience_content">
            <article className="experience_detail">
              <h4 className="text-light">Français</h4>
              <RiCheckboxBlankCircleFill /> <RiCheckboxBlankCircleFill />{" "}
              <RiCheckboxBlankCircleFill /> <RiCheckboxBlankCircleFill />{" "}
              <RiCheckboxBlankCircleFill />
              <h4 className="text-light">Anglais</h4>
              <RiCheckboxBlankCircleFill /> <RiCheckboxBlankCircleFill />{" "}
              <RiCheckboxBlankCircleFill /> <RiCheckboxBlankCircleLine />{" "}
              <RiCheckboxBlankCircleLine />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
