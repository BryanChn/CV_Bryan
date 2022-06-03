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
            Actuellement à l'UHA 4.O de Mulhouse en Licence Professionnelle
            Développeur Informatique , j'ai eu plusieurs expériences
            professionnelles. En tant que développeur, j'ai pu participer à 3
            projets concrets pour des clients, un projet personnel ainsi que
            deux projets dans le cadre de la formation.{" "}
            <li>
              MDC (Marre du céliba) : Technologie Ionic/Angular, pour une
              application de sortie entre amis.
            </li>
            <li>
              EBN (Les Tisserand Europe Bassin Nordfeld) : Technologie
              React-native et site vitrine sous React avec nestJs en back,
              application qui permet la récolte de biodéchets.
            </li>
            <li>
              SDIS67 : Web app sous React, avec l'API de mapbox pour une
              utilisation hors ligne des équipes d'intervention àfin de prévenir
              d'eventuel changements dans les itinéraires et des localisations
              des lieux d'interventions.
            </li>
            <li>Projet personnel : CV Interactif.</li>{" "}
            <li>
              Projet UHA : utilisation d'API pour créer un site web qui
              répertorie des groupes, des artistes musicaux (
              HTML/PHP/CSS).Création d'un site d'aide au calcul des formes
              géometriques ( Java/React){" "}
            </li>
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
