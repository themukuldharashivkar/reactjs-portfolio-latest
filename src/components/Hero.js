import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import avatar from "../assets/programmer.png";

const Hero = () => {
  const SOCIAL = [
    { id: 1, link: "https://www.twitter.com/themukul_99", icon: <FaTwitter /> },
    { id: 2, link: "https://www.github.com/themukuldharashivkar", icon: <FaGithub /> },
    { id: 3, link: "https://www.linkedin.com/in/themukuldharashivkar", icon: <FaLinkedin /> },
  ];

  window.addEventListener('scroll', function() {
    const downArrow = this.document.querySelector(".down-arrow");

    if (this.scrollY >= 1200) downArrow.classList.add('hide-down-arrow');
    else downArrow.classList.remove('hide-down-arrow');
  });

  return (
    <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
      <h2 className="text-4xl lg:text-5xl text-orange-500 uppercase font-bold">
        Mukul Dharashivkar
      </h2>
      <h3 className="py-3 text-2xl">Full Stack Developer</h3>
      <p className="max-w-xl font-light text-gray-500">
        Hello <span className="animate-pulse text-4xl">👋</span>, welcome to my
        site. I am a freelance software engineer currently seeking full time software engineer job. I love to work on front end projects.
      </p>
      {/* SOCIAL ICONS */}
      <div className="flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3">
        {SOCIAL.map(({ id, link, icon }) => (
          <a
            href={link}
            key={id}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer duration-300 hover:text-blue-600"
          >
            {icon}
          </a>
        ))}
      </div>
      {/* {avatar and resume} */}
      <div>
        <img
          src={avatar}
          alt="avatar"
          className="w-60 h-60 md:w-72 md:h-72 object-cover bg-gradient-to-b from-orange-500 rounded-xl pt-5"
        />
        <a
          href="/Mukul_Dharashivkar_Resume.pdf"
          download={true}
          className="flex items-center justify-center mt-10 bg-gradient-to-r from-orange-500 to-blue-700 hover:scale-125 duration-300 text-white py-2 rounded-lg"
        >
          Resume
        </a>
      </div>

      {/* {arrow down animation} */}
      <div className="mt-10 mb-0 down-arrow">
        <FaArrowDown className="text-orange-500 text-3xl animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
