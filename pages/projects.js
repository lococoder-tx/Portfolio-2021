import React from 'react';
import ProjectCard from '../components/Projects/ProjectCard';

const projects = () => {
  return (
    <main className="container">
      <h1 className="project-page-title">Projects</h1>
      <section className="projects">
        <ProjectCard
          imageSrc="/valhalla.png"
          header="Valhalla Project"
          sourceLink="https://github.com/chaleay/Valhalla-Marketplace"
          desc="A full stack marketplace created to allow vendors to easily sell and distribute their merchandise"
          demoLink="https://valhallaapp.herokuapp.com/"
        ></ProjectCard>
      </section>
    </main>
  );
};

export default projects;
