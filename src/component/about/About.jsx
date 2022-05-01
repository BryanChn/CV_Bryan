import React from "react";
import moismile from "../../assets/moismile.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsFolderCheck } from "react-icons/bs";

const About = () => {
  return (
    <section id="About">
      <h5>Découvrir</h5>
      <h2>Qui je suis</h2>

      <div className="about_container">
        <div className="about_me">
          <div className="about_me-smile">
            <img src={moismile} alt="About image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>UHA 4.0</h5>
              <small>License en cours</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>3 clients</small>
            </article>
            <article className="about_card">
              <BsFolderCheck className="about_icon" />
              <h5>Projets</h5>
              <small>3 projets professionnels</small>
            </article>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            minus omnis est odio, nobis, ipsam voluptatibus, officia totam
            magnam quidem eaque distinctio quam possimus molestias? Aspernatur,
            alias. Veniam, perferendis repellat!
          </p>
          <a href="#Contact" className="btn btn-primary">
            Contactez moi !
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
