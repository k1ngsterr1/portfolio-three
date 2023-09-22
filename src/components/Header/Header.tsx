import React from "react";

import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="flex items-center justify-between ">
      <span className="font-bold text-lg dark-blue">Ruslan Makhmatov</span>
      <nav className="flex items-center justify-between w-1/4">
        <Link
          to=""
          className="text-sm font-bold dark-blue cursor-pointer my-link"
        >
          About Me
        </Link>
        <Link
          to=""
          className="text-sm font-bold dark-blue cursor-pointer my-link"
        >
          My Skills
        </Link>
        <Link
          to=""
          className="text-sm font-bold dark-blue cursor-pointer my-link"
        >
          Portfolio
        </Link>
        <Link
          to=""
          className="text-sm font-bold dark-blue cursor-pointer my-link"
        >
          Contacts
        </Link>
      </nav>
    </header>
  );
};

export default Header;
