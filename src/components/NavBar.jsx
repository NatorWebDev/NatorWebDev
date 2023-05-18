import { useEffect } from "react";

const navLinkStyles =
  "mx-16 hover:text-secondary  transition-all duration-200 cursor-pointer";
const navLinkActiveStyles =
  "mx-16 hover:text-secondary  transition-all duration-200 cursor-pointer text-secondary";

export const NavBar = ({ show }) => {
  return (
    <ul className="flex w-full h-32 mt-32 fixed top-0 lelt-0 items-center justify-center font-medium">
      <li className={show == "1" ? navLinkActiveStyles : navLinkStyles}>
        <a href="#home">Home</a>
      </li>
      <li className={show == "2" ? navLinkActiveStyles : navLinkStyles}>
        <a href="#about">About</a>
      </li>
      <li className={show == "3" ? navLinkActiveStyles : navLinkStyles}>
        <a href="#projects">Projects</a>
      </li>
    </ul>
  );
};
