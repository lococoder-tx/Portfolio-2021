import React from 'react';
import ProjectCard from '../components/Projects/ProjectCard';

const projects = () => {
  return (
    <main className="container container__fadeIn">
      <h1 className="project-page-title">Projects</h1>
      <section className="projects">
        <ProjectCard
          number={1}
          selection
          imageSrc="/valhalla.jpg"
          header="Valhalla Project"
          sourceLink="https://github.com/chaleay/Valhalla-Marketplace"
          desc="A full stack marketplace created to allow vendors to easily sell and distribute their merchandise"
          demoLink="https://valhallaapp.herokuapp.com/"
        ></ProjectCard>
        <ProjectCard
          number={2}
          selection
          imageSrc="/trillo.jpg"
          header="Hotel Hero"
          sourceLink="https://github.com/chaleay/Flexbox-Trillo"
          desc="A design template I created for a fake travel agency. Uses SASS and flexbox."
          demoLink="https://hotelhero.netlify.app/"
        ></ProjectCard>
        <ProjectCard
          number={3}
          selection
          imageSrc="/grid-realtor.jpg"
          header="Grid Realtor"
          sourceLink="https://github.com/chaleay/Grid-Realtor"
          desc="A design template I created for a fake realtor agency. Uses SASS and gridbox."
          demoLink="https://grid-realtor.netlify.app/"
        ></ProjectCard>
        <ProjectCard
          number={4}
          selection={false}
          imageSrc="/GlobalGameJam.jpg"
          header="Memento"
          sourceLink="https://github.com/chaleay/2019-Global-Game-Jam"
          desc="A fast-paced 2D platformer created by me and my team for the 2019 Global Game Jam"
          demoLink="#"
        ></ProjectCard>
        <h2 className="projects__end-text">
          Find more of my projects on{' '}
          <a href="https://github.com/chaleay">Github</a>
        </h2>
      </section>
    </main>
  );
};

export default projects;
