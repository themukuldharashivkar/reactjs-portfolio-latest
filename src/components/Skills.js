import React from "react";
import Section from "./common/Section";
// import commerce from "../assets/commerce.png";
// import research from "../assets/research.png";
// import web from "../assets/web.png";
// import mobile from "../assets/mobile.png";

import java from "../assets/java.png";
import spring from "../assets/spring.png";
import react from "../assets/react.png";
import javascript from "../assets/js.png";
import jquery from "../assets/jquery.png";
import mysql from "../assets/mysql.png";
import python from "../assets/python.png";
import css from "../assets/css.png";

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
      image: css,
      title: "Tailwind CSS",
    },
  ];

  return (
    <Section
      title="Skills"
      subtitle="I can work in all the Skills mentioned below."
    >
      <div className="grid gap-10 lg:grid-cols-4 md:grid-cols-2">
        {services.map(({ id, image, title }) => (
          <div key={id} className="flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-orange-500 rounded-xl duration-300 ease-in-out hover:scale-110">
            <img src={image} alt={title} className="w-36 h-36 md:h-44 md:w-44 object-contain" />
            <h3 className="mt-5 text-base">{title}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Serivces;
