import React from "react";

const ProjectCard = ({ title, description }) => {
    return (
        <div className="main-card">
            <div className="project-card">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
