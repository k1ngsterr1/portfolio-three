import React from "react";

import { Link } from "react-scroll";
import { FaCode } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex items-center justify-between ">
      <div className="flex items-center">
        <FaCode size={26} className="custom-orange"></FaCode>
        <span className="font-bold text-lg dark-blue ml-2">
          Ruslan Makhmatov
        </span>
      </div>
      <nav className="flex items-center justify-between h-20 ">
        <Link
          to=""
          className="text-sm font-bold dark-blue cursor-pointer my-link"
        >
          About Me
        </Link>
        <Link
          to=""
          className="text-sm font-bold dark-blue cursor-pointer my-link ml-6"
        >
          My Skills
        </Link>
        <Link
          to=""
          className="text-sm font-bold dark-blue cursor-pointer my-link ml-6"
        >
          Portfolio
        </Link>
        <Link
          to=""
          className="text-sm font-bold dark-blue cursor-pointer my-link ml-6"
        >
          Contacts
        </Link>
      </nav>
    </header>
  );
};

export default Header;
