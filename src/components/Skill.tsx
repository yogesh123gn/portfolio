import React from 'react';

interface SkillProps {
    name: string;
    imageSrc: string;
}

const Skill: React.FC<SkillProps> = ({ name, imageSrc }) => {
    return (
        <li>
            <img src={imageSrc} alt={name.toLowerCase()} width="40" height="40" />
            <p>{name}</p>
        </li>
    );
};

export default Skill;
