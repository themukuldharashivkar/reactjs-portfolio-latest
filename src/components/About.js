import React from "react";
import Section from "./common/Section";
import AboutImg from "../assets/coder.png";

const About = () => {
  return (
    <Section title="About Me" subtitle="Full Stack Software Engineer">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-evenly">
        <div className="about-info mx-auto justify-evenly">
          <p className="md:max-w-lg font-extralight pb-5 justify-center ">
            Hi, My Name Is Mukul Rajendra Dharashivkar and everyone calls me Mukul. I am a Full Stack Web Developer. I build beautiful websites with React and Tailwind CSS.
          </p>
          <p className="md:max-w-lg font-extralight pb-5 justify-center">
            I have recently completed my Bachelor of Engineering in Computer Engineering from Progressive Education Society's Modern College of Engineering, Pune.
          </p>
          <p className="md:max-w-lg font-extralight pb-5 justify-center">I am proficient in ReactJS, Spring, Spring Boot, Bootstrap, Flask, Tailwind CSS and many more. In backend I know Node.js, Spring, Spring Boot, MySQL, Flask</p>
          <p className="md:max-w-lg font-extralight pb-5 justify-center">
            In my spare time I play cricket and read blogs.
          </p>
        </div>

        <div className="about-img mx-auto w-80 h-80 justify-evenly">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%]  bg-gradient-to-b from-orange-500 rounded-xl pt-5"
          />
        </div>
      </div>
    </Section>
  );
};

export default About;
