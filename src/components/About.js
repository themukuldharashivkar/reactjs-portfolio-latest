import React from "react";
import Section from "./common/Section";
import MukulImg from "../assets/mukul.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Section title="About Me" subtitle="Full Stack Developer">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col min-h-fit text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto items-center md:pt-16 md:pb-16"
      >
        <motion.img
          src={MukulImg}
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 md:mb-0 flex-shrink-0 rounded-full w-56 h-56 object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[350px]"
        />
        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-2xl font-light">Here's a Little Background.</h4>
          <p className="text-base font-extralight">
            Hi, I am Mukul Rajendra Dharashivkar and everyone calls me Mukul. I
            am a Full Stack Web Developer. I build beautiful websites with React
            and Tailwind CSS. I have recently completed my Bachelor of
            Engineering in Computer Engineering from Progressive Education
            Society's Modern College of Engineering, Pune. I am proficient in
            ReactJS, Spring, Spring Boot, Bootstrap, Flask, Tailwind CSS and
            many more. In backend I can work in Spring, Spring Boot, MySQL,
            Flask. In my spare time I play cricket and read blogs.
          </p>
        </div>
      </motion.div>
    </Section>
  );
};

export default About;
