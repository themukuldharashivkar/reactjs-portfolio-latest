import React from "react";
import Section from "./common/Section";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const SOCIAL = [
    { id: 1, link: "https://www.twitter.com/themukul_99", icon: <FaTwitter /> },
    { id: 2, link: "https://www.github.com/themukuldharashivkar", icon: <FaGithub /> },
    { id: 3, link: "https://www.linkedin.com/in/themukuldharashivkar", icon: <FaLinkedin /> },
  ];
  return (
    <Section title="Contact Me" subtitle="Hope to hear from you soon">
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        {/* <div>
          <img src={contact} alt="contact info" className="w-32 h-32"></img>
        </div> */}
        <div>
          <p className="max-w-xs md:max-w-lg font-extralight">
            I am open to talk regarding freelancing or full time opportunities.
            Feel free to contact me using your preferred medium.
          </p>
        </div>
        {/* <div className="flex w-full items-center justify-evenly text-3xl">
          {SOCIAL.map(({ id, link, icon }) => (
            <a href={link}  target="_blank" rel="noopener noreferrer" className="duration-200 ease-in-out hover:text-blue-600">{icon}</a>
          ))}
        </div> */}

        {/* bottom form */}
        <div className="p-8 text-left w-full">
            <form action="https://getform.io/f/e05b6bc9-032c-4a2c-a5af-ff2107822d78" method="POST">
                <div className="gap-4 w-full">
                    <div className="flex flex-col">
                        <label className="capitalize text-sm py-2 font-extralight">
                            name
                        </label>
                        <input type="text" name="name" className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white" />
                    </div>
                    <div className="flex flex-col">
                        <label className="capitalize text-sm py-2 font-extralight">
                            phone
                        </label>
                        <input type="text" name="phone" className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white" />
                    </div>
                    <div className="flex flex-col">
                        <label className="capitalize text-sm py-2 font-extralight">
                            email
                        </label>
                        <input type="text" name="email" className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white" />
                    </div>
                    <div className="flex flex-col">
                        <label className="capitalize text-sm py-2 font-extralight">
                            message
                        </label>
                        <textarea name="message" rows="10" className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none"></textarea>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button className="my-8 bg-gradient-to-r from-orange-500 to-blue-600 text-white px-6 py-3 uppercase rounded-md tracking-wider cursor-pointer hover:scale-125 duration-200">Send Message</button>
                </div>
            </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
