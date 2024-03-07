import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import github from "../assets/github.svg";

const Documentaion = () => {
  return (
    <div>
      <Navbar />
      <div className="container h-[100vh] bg-slate-950 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <a href="https://github.com/Ninja-Vikash">
            <img className="h-44" src={github} height={20} />
          </a>
          <h2 className="text-white">Click On github</h2>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Documentaion;
