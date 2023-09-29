import React from "react";

import { Link } from "react-scroll";
import { FaCode } from "react-icons/fa";
import { Bounce, Fade } from "react-awesome-reveal";

const Header = () => {
  return (
    <header className="flex items-center justify-between mt-12 ">
      <div className="flex items-center">
        <Bounce delay={100} triggerOnce={true}>
          <FaCode size={48} className="custom-orange"></FaCode>
        </Bounce>
        <Bounce delay={200} triggerOnce={true}>
          <span className="font-bold text-3xl dark-blue ml-4" id="logo">
            Ruslan Makhmatov
          </span>
        </Bounce>
      </div>

      <nav className="flex items-center justify-between h-20 ">
        <Bounce delay={400} triggerOnce={true}>
          <Link
            to="main"
            className="text-2xl font-bold dark-blue cursor-pointer my-link"
          >
            About Me
          </Link>
        </Bounce>
        <Bounce delay={600} triggerOnce={true}>
          <Link
            to="skills"
            smooth={true}
            className="text-2xl font-bold dark-blue cursor-pointer my-link ml-6"
          >
            My Skills
          </Link>
        </Bounce>
        <Bounce delay={800} triggerOnce={true}>
          <Link
            to="portfolio"
            smooth={true}
            className="text-2xl font-bold dark-blue cursor-pointer my-link ml-6"
          >
            Portfolio
          </Link>
        </Bounce>
        <Bounce delay={1000} triggerOnce={true}>
          <Link
            to=""
            className="text-2xl font-bold dark-blue cursor-pointer my-link ml-6"
          >
            Contacts
          </Link>
        </Bounce>
      </nav>
    </header>
  );
};

export default Header;
