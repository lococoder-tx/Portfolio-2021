import React from "react";
import ProjectCard from "../components/Projects/ProjectCard";

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
          selection={false}
          imageSrc="/wisp.jpg"
          header="rE:bUried"
          sourceLink="https://github.com/chaleay/2019-Global-Game-Jam"
          desc="You're a ghost buster, and your job is to send those evil souls back to whence they came. Made for the Magic Leap AR Headset."
          demoLink="#"
        ></ProjectCard>
        <ProjectCard
          number={3}
          selection={false}
          imageSrc="/GlobalGameJam.jpg"
          header="Memento"
          sourceLink="https://github.com/chaleay/2019-Global-Game-Jam"
          desc="Won 2nd place at Global Game Jam 2019. Hunt down your memories as you struggle to remember the person you once were. Made with Unity."
          demoLink="#"
        ></ProjectCard>
        <ProjectCard
          number={4}
          selection
          imageSrc="/trillo.jpg"
          header="Hotel Hero"
          sourceLink="https://github.com/chaleay/Flexbox-Trillo"
          desc="A design template I created for a fake travel agency. Uses SASS and flexbox."
          demoLink="https://hotelhero.netlify.app/"
        ></ProjectCard>
        <ProjectCard
          number={5}
          selection
          imageSrc="/grid-realtor.jpg"
          header="Grid Realtor"
          sourceLink="https://github.com/chaleay/Grid-Realtor"
          desc="A design template I created for a fake realtor agency. Uses SASS and gridbox."
          demoLink="https://grid-realtor.netlify.app/"
        ></ProjectCard>

        <h2 className="projects__end-text">
          Find more of my projects on{" "}
          <a href="https://github.com/chaleay">Github</a>
        </h2>
      </section>
    </main>
  );
};

export default projects;
