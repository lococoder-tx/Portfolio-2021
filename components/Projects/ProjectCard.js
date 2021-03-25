import React from 'react';
import Image from 'next/image';

const ProjectCard = ({
  imageSrc,
  header,
  desc,
  sourceLink,
  demoLink,
  selection,
  number,
}) => {
  return (
    <div className={`projects__card projects__card--${number}`}>
      <div className="projects__card__image">
        <Image width={1477} height={600} src={imageSrc}></Image>
      </div>
      <div className="projects__card__info">
        <h2 className="projects__card__source">
          <a href={sourceLink}>Source</a>
        </h2>
        <h1
          className={`projects__card__header ${
            !selection ? 'projects__card__no-select' : ''
          } `}
        >
          <a
            className={`${!selection ? 'projects__card__no-select' : ''}`}
            href={demoLink}
          >
            {header}
          </a>
        </h1>
      </div>
      <div className="projects__card__desc">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
