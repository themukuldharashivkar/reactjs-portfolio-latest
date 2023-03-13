import React from "react";
import Section from "./common/Section";
import { motion } from "framer-motion";
import java from "../assets/java.png";
import spring from "../assets/spring.png";
import react from "../assets/react.png";
import javascript from "../assets/js.png";
import jquery from "../assets/jquery.png";
import mysql from "../assets/mysql.png";
import python from "../assets/python.png";
import css from "../assets/css.png";
import css3 from "../assets/css3.png";
import html from "../assets/html.png";
import boot from "../assets/boot.png";
import git from "../assets/git.png";

const Serivces = () => {
  const services = [
    {
      id: 1,
      image: java,
      title: "Java",
    },
    {
      id: 2,
      image: spring,
      title: "Spring Boot",
    },
    {
      id: 3,
      image: react,
      title: "React JS",
    },
    {
      id: 4,
      image: javascript,
      title: "Javascript",
    },
    {
      id: 5,
      image: jquery,
      title: "jQuery",
    },
    {
      id: 6,
      image: mysql,
      title: "MySQL",
    },
    {
      id: 7,
      image: python,
      title: "Python",
    },
    {
      id: 8,
      image: html,
      title: "HTML",
    },
    {
      id: 9,
      image: css3,
      title: "CSS",
    },
    {
      id: 10,
      image: css,
      title: "Tailwind CSS",
    },
    {
      id: 11,
      image: boot,
      title: "Bootstrap CSS",
    },
    {
      id: 12,
      image: git,
      title: "Git",
    },
  ];

  return (
    <Section
      title="Skills"
      subtitle="I can work in all the Skills mentioned below."
    >
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="grid gap-10 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 md:pt-16 md:pb-16"
      >
        {services.map(({ id, image, title }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-blue-500 rounded-full object-cover w-24 h-24 md:w-32 md:h-32 duration-300 ease-in-out hover:scale-110"
          >
            <img
              src={image}
              alt={title}
              className="w-36 h-36 md:h-44 md:w-44 object-contain"
            />
          </div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Serivces;
