import React from "react";
import Section from "./common/Section";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import p1 from "../assets/blog.jpg";
import p2 from "../assets/movie.jpg";
import p3 from "../assets/tindog.jpg";
import p4 from "../assets/todo.jpg";
import p5 from "../assets/top10.jpg";
import p6 from "../assets/expense.png";
import p7 from "../assets/drum.png";
import p8 from "../assets/simon.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: p1,
      title: "Personal Blog",
      github:
        "https://github.com/themukuldharashivkar/personal-mukul-blog-website",
      demo: "https://themukuldharashivkar-blog.onrender.com/",
    },
    {
      id: 2,
      image: p2,
      title: "Movie Flix",
      github: "https://github.com/themukuldharashivkar/Movie-Flix",
      demo: "https://github.com/themukuldharashivkar/Movie-Flix",
    },
    {
      id: 3,
      image: p3,
      title: "Tindog",
      github: "https://github.com/themukuldharashivkar/Tindog-Website",
      demo: "https://tindog-website-chi.vercel.app/",
    },
    {
      id: 4,
      image: p4,
      title: "ToDo List",
      github: "https://github.com/themukuldharashivkar/ToDo-Website",
      demo: "https://github.com/themukuldharashivkar/ToDo-Website",
    },
    {
      id: 5,
      image: p5,
      title: "Top 10 Movies",
      github: "https://github.com/themukuldharashivkar/Top-10-Movie-Website",
      demo: "https://movies-list.onrender.com/",
    },
    {
      id: 6,
      image: p6,
      title: "Expense Tracker",
      github: "https://github.com/themukuldharashivkar/Expense-Tracker-ReactJS",
      demo: "https://expense-tracker-react-9mffr44hp-themukuldharashivkar.vercel.app/",
    },
    {
      id: 7,
      image: p7,
      title: "Drum Set",
      github:
        "https://github.com/themukuldharashivkar/Drum-Set-Website-using-JavaScript",
      demo: "https://super-gecko-c5a330.netlify.app",
    },
    {
      id: 8,
      image: p8,
      title: "Simon Game",
      github:
        "https://github.com/themukuldharashivkar/Simon-Game-using-JavaScript-and-jQuery",
      demo: "https://simon-game-jquery-md.netlify.app/",
    },
  ];
  return (
    <Section
      title="Portfolio"
      subtitle="These are all the projects that i have worked on."
    >
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="grid gap-8 lg:gap-14 lg:grid-cols-2"
      >
        {projects.map(({ id, image, title, github, demo }) => (
          <div
            key={id}
            className="max-w-lg flex shadow-lg shadow-gray-300 dark:shadow-blue-500 rounded-2xl overflow-hidden hover:scale-105 duration-200"
          >
            <img src={image} alt={title} className="w-2/3" />
            <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
              <h2>{title}</h2>
              <a
                className="text-2xl cursor-pointer duration-150 hover:scale-110 hover:text-blue-600"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                className="text-2xl cursor-pointer duration-150 hover:scale-110 hover:text-blue-600"
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkSquareAlt />
              </a>
            </div>
          </div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Portfolio;
