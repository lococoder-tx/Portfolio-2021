import React from 'react';
import Image from 'next/image';

const ProjectCard = ({ imageSrc, header, desc, sourceLink, demoLink }) => {
  return (
    <div className="projects__card">
      <div className="projects__card__image">
        <Image width={1477} height={600} src={imageSrc}></Image>
      </div>
      <div className="projects__card__info">
        <h2 className="projects__card__source">
          <a href={sourceLink}>Source</a>
        </h2>
        <h1 className="projects__card__header">
          <a href={demoLink}>{header}</a>
        </h1>
      </div>
      <div className="projects__card__desc">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
