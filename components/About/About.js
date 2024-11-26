import Link from 'next/link'
import { useState } from 'react'

const About = () => {
  const [seeAbout, setSeeAbout] = useState(false)

  return (
    <>
      <div className="about"></div>
      <main className="about__content_box">
        <h2 className="margin-bottom-md">
          I'm <span className="colored-text-1">Elijah Gaytan.</span> Of all the
          pages on the internet - you stumbled on this one. In any case, thanks
          for stopping by.
        </h2>
        <p className="margin-bottom-md">
          I'm a Software Engineer from Austin, TX. I'm a Full-Stack connoisseur
          who specializes in creating stunning, user-friendly and scalable Web
          Applications.
        </p>
        <p className="margin-bottom-md">
          My software development journey started with me doing something{' '}
          <a href="https://www.linkedin.com/company/vrdg">
            entirely different.
          </a>
          - game development. I started making games when was 16, and I played
          around with a lot of different engines, such as{' '}
          <a href="https://www.rpgmakerweb.com/">RPG Maker</a> and Unity. It was
          around this time I got introduced by a{' '}
          <a href="https://www.linkedin.com/in/claytonvr/">friend</a> to the
          insane reality that is Virtual Reality (pun intended). I got offered a
          contract to work with the{' '}
          <a href="https://news.txst.edu/research-and-innovation/2019/first-responders-train-using-virtual-reality.html/">
            city of Austin
          </a>{' '}
          on an exciting new simulation, and I joined Texas State's VR Club as a
          founding member.
        </p>
        <p className="margin-bottom-md">
          Our club was wildly successful, and we would go on to host three of
          the largest hackathons at Texas State. We were hands-on with the club
          until 2020, until...{' '}
          <a href="https://en.wikipedia.org/wiki/COVID-19_pandemic">
            well, you know what happened.
          </a>
        </p>
        <p className="margin-bottom-md">
          After I graduated in 2020, I took a break from VR, and ended up
          falling in love with something different - backend development. I got
          my first Software Engineering job at
          <a href="https://www.pnc.com/en/personal-banking.html"> PNC</a>, where
          I worked in Python (for the first time) on developing APIS for a
          couple of new internal projects and microservices.
        </p>
        <p className="margin-bottom-md">
          At PNC, I got the pleasure of developing across a wide variety of tech
          stack, from Django / FastAPI and MySQL, to Express.js and MongoDB (the
          much loved / hated MERN Stack). I got exposed to a wide variety of
          technologies, and I loved it.
        </p>
        <p className="margin-bottom-md">
          I also got my first taste of professional frontend development. I
          vividly remember my first professional frontend project - implementing
          an Audit Table in Vue.js. Needless to say, the code was not pretty,
          but that's where my love for working on full-stack projects
          flourished. And the rest is history.
        </p>
        <h3>
          Nowadays, I spend my days working with startups and local businesses,
          and bringing their visions to life. If this sounds like you - feel
          free to shoot me a <Link href="/contact">message!</Link> I'd love to
          learn what you're working on.
        </h3>
      </main>
    </>
  )
}

export default About
