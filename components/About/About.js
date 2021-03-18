import React from 'react';
import Image from 'next/image';
import { Document, Page } from 'react-pdf';

const About = () => {
  return (
    <>
      <div className="about"></div>
      <h1 className="about__title">About</h1>
      <main className="about__content_box">
        <h3 className="margin-bottom-md">
          I'm <span className="colored-text-1">Elijah Gaytan.</span> Chances
          are, if you've stumbled across this page, you're either a recruiter, a
          friend of mine, or a stalker. In any case, thanks for stopping by.
        </h3>
        <p className="margin-bottom-md">
          I'm a software engineer, currently employed at{' '}
          <a href="https://www.pnc.com/">PNC</a>. Prior to that, I worked as a
          software engineer for the Texas State Virtual Reality Lab. I graduated
          from the University of Texas in 2017 with a degree in philosophy, as
          well as Texas State, with my BS in Computer Science in 2020.
        </p>
        <p className="margin-bottom-md">
          I started my programming journey at the age of 13, when I started
          learning python. But it wasn't really until high school, when I
          started learning java, that I knew what I was doing. I really enjoyed
          my early experiencies with programming. The problem-solving aspect of
          it was exhilarating for me, and I knew from them then on that I
          couldn't really picture myself doing anything but software development
          for a career.
        </p>
        <p className="margin-bottom-md">
          I started off my programming journey with a heavy emphasis on game
          development in Unity, but over the past few years my interest has
          shifted over to Full Stack Web Development. I'm also an avid Linux
          User, running my own personal Fedora 33 installation, as well as my
          own private server with Debian.
        </p>

        <p>
          In my free time, I'm an avid musician, guitarist, and all-around music
          nerd. I also love to go the gym, lift weights, and grow my body and
          mind.
        </p>
      </main>
      {/* <Document file="public/resume.pdf">
        <Page pageNumber={1}></Page>
      </Document> */}
    </>
  );
};

export default About;
