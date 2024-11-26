import ProjectCard from '../components/Projects/ProjectCard'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const projects = () => {
  return (
    <div className="container-projects container__fadeIn">
      <Head>
        <title>Elijah Gaytan - Projects</title>
      </Head>
      <h1 className="project-page-title">
        Featured{' '}
        <a href="https://github.com/chaleay">
          <FontAwesomeIcon icon={faGithub} size="1x"></FontAwesomeIcon>
        </a>{' '}
        Work
      </h1>
      <section className="projects">
        <ProjectCard
          number={1}
          selection
          imageSrc="/colorfull.png"
          header="Colorfull"
          sourceLink="https://github.com/chaleay/colorfull"
          desc="Colorfull is an AI-powered B2B delivery service that provides affordable, high-quality, and sustainable meals to businesses - all in one delivery."
          demoLink="https://app.colorfull.ai"
        />
        <ProjectCard
          number={2}
          selection
          imageSrc="/myCollegeApps.png"
          header="myCollegeApps"
          sourceLink="https://github.com/chaleay/myCollegeApps"
          desc="myCollegeApps is a next-gen college consulting platform that offers personalized, AI consulting services for students and families."
          demoLink="https://app.mycollegeapps.org"
        />
        <ProjectCard
          number={3}
          selection
          imageSrc="/solace_cms.png"
          header="Solace CMS"
          sourceLink="https://github.com/chaleay/solace-cms-dashboard"
          desc="Solace is a solution for seamless hotel management. Solace makes it easier than ever to manage reservations, onboard new employees, and oversee day-to-day operations."
          demoLink="https://cms-solace.netlify.app/"
        ></ProjectCard>
        <ProjectCard
          number={4}
          selection
          imageSrc="/solace_site.png"
          header="Solace - Site"
          sourceLink="https://github.com/chaleay/solace-site"
          desc="A beautiful Next.js application for booking and managing luxury hotel reservations."
          demoLink="https://solace-site-demo.vercel.app/"
        ></ProjectCard>
        <ProjectCard
          number={5}
          selection
          imageSrc="/trillo.jpg"
          header="Hotel Hero"
          sourceLink="https://github.com/chaleay/Flexbox-Trillo"
          desc="An HTML/CSS/JS design template I created for travel booking agencies. Utlizes the latest cutting edge features of CSS."
          demoLink="https://hotelhero.netlify.app/"
        ></ProjectCard>
        <ProjectCard
          number={6}
          selection
          imageSrc="/grid-realtor.jpg"
          header="Grid Realtor"
          sourceLink="https://github.com/chaleay/Grid-Realtor"
          desc="Another HTML/CSS template I created specifically for realtor agencies. This project showcases a beautiful and stunning gridlike design."
          demoLink="https://grid-realtor.netlify.app/"
        ></ProjectCard>
        {/* <ProjectCard
          number={3}
          selection={false}
          imageSrc="/GlobalGameJam.jpg"
          header="Memento"
          sourceLink="https://github.com/chaleay/2019-Global-Game-Jam"
          desc="Won 2nd place at Global Game Jam 2019. Hunt down your memories as you struggle to remember the person you once were. Made with Unity."
          demoLink="#"
        ></ProjectCard> */}

        {/* <h2 className="projects__end-text">
          Find more of my projects on{" "}
          <a href="https://github.com/chaleay">Github</a>
        </h2> */}
      </section>
    </div>
  )
}

export default projects
