import React from 'react';

interface ProjectCardProps {
    imageSrc: string;
    title: string;
    description: string;
    link?: string;
    buttonText?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    imageSrc,
    title,
    description,
    link = "#",
    buttonText = "Go somewhere"
}) => {
    return (
        <div className="card" style={{ width: "30rem" }}>
            <div className="card-header">
                <img
                    className="card-img-top"
                    src={imageSrc}
                    alt={title}
                    width="280px"
                    height="230px"
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={link} className="btn btn-primary">{buttonText}</a>
            </div>
        </div>
    );
};

export default ProjectCard;
