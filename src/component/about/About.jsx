import React from "react";
import moismile from "../../assets/moismile.jpg";
import moitoons from "../../assets/moitoons.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsFolderCheck } from "react-icons/bs";
import ProjectCard from "../card/ProjectCard";

const About = () => {
    return (
        <section id="About">
            <h5>Découvrir</h5>
            <h2>Qui je suis</h2>

            <div className="about_container">
                <div className="about_me">
                    <div className="about_me-smile">
                        <img src={moitoons} alt="About image" />
                    </div>
                </div>
                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className="about_icon" />
                            <h5>UHA 4.0</h5>
                            <small>Licence Professionnelle</small>
                        </article>
                        <article className="about_card">
                            <FiUsers className="about_icon" />
                            <h5>Clients</h5>
                            <small>5 clients</small>
                        </article>
                        <article className="about_card">
                            <BsFolderCheck className="about_icon" />
                            <h5>Projets</h5>
                            <small>5 projets professionnels</small>
                        </article>
                        <article className="about_card">
                            <FiUsers className="about_icon" />
                            <h5>Stage</h5>
                            <small>6 mois de stage</small>
                        </article>
                    </div>

                    <div className="about_cards">
                        <ProjectCard
                            title={"MDC"}
                            description={
                                " pour une application de sortie entre amis."
                            }
                        />
                        <ProjectCard
                            title={"EBN"}
                            description={
                                "Technologie React-native et site vitrine sous React avec NestJs en back , application qui permet la récolte des biodéchets"
                            }
                        />
                        <ProjectCard
                            title={"SDIS67"}
                            description={
                                "Web App avec React API MapBox pour une utilisation hors ligne des équipes de secours"
                            }
                        />
                        <ProjectCard
                            title={"ENVIE"}
                            description={
                                "Site de gestion de stock avec NextJs et NestJs"
                            }
                        />
                        <ProjectCard
                            title={"AlterAlsace"}
                            description={
                                "Site et application mobile de gestion énergétique"
                            }
                        />
                        <ProjectCard
                            title={"Stage 6mois"}
                            description={
                                "Création d'une librairie de création de formulaire (form-generator) en angular/Java "
                            }
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
