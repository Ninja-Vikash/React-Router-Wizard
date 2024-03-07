import React from "react";
import code from "../assets/code.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

const Footer = () => {
  return (
    <footer className="container absolute bottom-6 w-[84vw] m-auto flex justify-between items-end">
      <div>
        <h3 className="text-white text-sm flex items-center gap-2 font-thin">
          Developed by <img className="h-4" src={code} height={10} />
        </h3>
        <h2 className="text-white text-xl">Ninja-Vikash</h2>
      </div>

      <div className="flex gap-2">
        <a target="_blank" href="https://www.linkedin.com/in/vikashkumar003/">
          <img className="h-7" src={linkedin} height={10} />
        </a>
        <a target="_blank" href="https://github.com/Ninja-Vikash">
          <img className="h-7" src={github} height={10} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
