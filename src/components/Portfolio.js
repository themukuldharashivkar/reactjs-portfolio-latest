import React from 'react';
import Section from './common/Section';
import {FaGithub, FaExternalLinkSquareAlt} from "react-icons/fa";

import p1 from "../assets/blog.jpg";
import p2 from "../assets/movie.jpg";
import p3 from "../assets/tindog.jpg";
import p4 from "../assets/todo.jpg";
import p5 from "../assets/top10.jpg";
import p6 from "../assets/expense.png";

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            image: p1,
            title: "Personal Blog",
            github: "https://github.com/themukuldharashivkar/personal-mukul-blog-website",
            demo: "https://themukuldharashivkar-blog.onrender.com/"
        },
        {
            id: 2,
            image: p2,
            title: "Movie Flix",
            github: "https://github.com/themukuldharashivkar/Movie-Flix",
            demo: "https://github.com/themukuldharashivkar/Movie-Flix"
        },
        {
            id: 3,
            image: p3,
            title: "Tindog",
            github: "https://github.com/themukuldharashivkar/Tindog-Website",
            demo: "https://tindog-website-chi.vercel.app/"
        },
        {
            id: 4,
            image: p4,
            title: "ToDo List",
            github: "https://github.com/themukuldharashivkar/ToDo-Website",
            demo: "https://github.com/themukuldharashivkar/ToDo-Website"
        },
        {
            id: 5,
            image: p5,
            title: "Top 10 Movies",
            github: "https://github.com/themukuldharashivkar/Top-10-Movie-Website",
            demo: "https://github.com/themukuldharashivkar/Top-10-Movie-Website"
        },
        {
            id: 6,
            image: p6,
            title: "Expense Tracker",
            github: "https://github.com/themukuldharashivkar/Expense-Tracker-ReactJS",
            demo: "https://expense-tracker-react-9mffr44hp-themukuldharashivkar.vercel.app/"
        },
    ];
  return (
    <Section title="Portfolio" subtitle="These are all the projects that i have worked on.">
        <div className='grid gap-8 lg:gap-14 lg:grid-cols-2'>
            {
                projects.map(({id, image, title, github, demo}) => (
                    <div key={id} className='max-w-lg flex shadow-lg shadow-gray-300 dark:shadow-blue-500 rounded-2xl overflow-hidden hover:scale-105 duration-200'>
                        <img src={image} alt={title} className="w-2/3"/>
                        <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
                            <h2>{title}</h2>
                            <a className="text-2xl cursor-pointer duration-150 hover:scale-110" href={github} target="_blank" rel="noopener noreferrer"><FaGithub/></a>
                            <a className="text-2xl cursor-pointer duration-150 hover:scale-110" href={demo} target="_blank" rel="noopener noreferrer"><FaExternalLinkSquareAlt/></a>
                        </div>
                    </div>
                ))
            }
        </div>
    </Section>
  )
}

export default Portfolio