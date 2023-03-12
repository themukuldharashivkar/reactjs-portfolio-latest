import React from "react";
import Section from "./common/Section";
import AboutImg from "../assets/coder.png";

const About = () => {
  return (
    <Section title="About Me" subtitle="Full Stack Developer">
      <div className="mx-auto lg:mx-10  md:mx-6 grid md:grid-cols-2 items-center justify-between md:justify-evenly">
        <div className="about-info mx-auto justify-between text-left">
          <p className="md:max-w-lg font-light pb-5 justify-center ">
            Hi, I am Mukul Rajendra Dharashivkar and everyone calls me Mukul. I am a Full Stack Web Developer. I build beautiful websites with React and Tailwind CSS.
          </p>
          <p className="md:max-w-lg font-light pb-5 justify-center">
            I have recently completed my Bachelor of Engineering in Computer Engineering from Progressive Education Society's Modern College of Engineering, Pune.
          </p>
          <p className="md:max-w-lg font-light pb-5 justify-center">I am proficient in ReactJS, Spring, Spring Boot, Bootstrap, Flask, Tailwind CSS and many more. In backend I can work in Spring, Spring Boot, MySQL, Flask</p>
          <p className="md:max-w-lg font-light pb-5 justify-center">
            In my spare time I play cricket and read blogs.
          </p>
        </div>

        <div className="about-img mx-auto w-80 h-80 justify-evenly">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%]  bg-gradient-to-b from-blue-600 rounded-xl pt-5"
          />
        </div>
      </div>
    </Section>
  );
};

export default About;
