import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <nav className="absolute container flex justify-between items-center px-24 bg-indigo-950/10">
      <div className="logo font-bold text-xl text-white">
        <Link to="/" className="flex items-center gap-2">
          <img className="h-8" src={logo} height={10} /> Router-Wizard
        </Link>
      </div>
      <ul className="flex p-4 gap-16 text-white font-semibold">
        <li>
          <Link className="hover:text-slate-300" to="/">Home</Link>
        </li>
        <li>
          <Link className="hover:text-slate-300" to="/about">About</Link>
        </li>
        <li>
          <Link className="hover:text-slate-300" to="/documentation">Documentation</Link>
        </li>
        <li>
          <Link className="hover:text-slate-300" to="/other">Other</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
