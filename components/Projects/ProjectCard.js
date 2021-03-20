import React from 'react';
import Image from 'next/image';

const ProjectCard = () => {
  return (
    <div className="projects__card">
      <div className="projects__card__image">
        <Image width={1477} height={600} src="/valhalla.png"></Image>
      </div>
      <h1 className="projects__card__header">Valhalla Marketplace</h1>
      <div className="projects__card__desc">
        <p>
          A marketplace I created to help small vendors sell their merchandise.
          Basically, it's eBay.
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
