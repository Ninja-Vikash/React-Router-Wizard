import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container h-[100vh] bg-slate-950 flex flex-col items-center justify-center">
        <div className="w-[70vw]">
          <h1 className="text-7xl font-medium text-white mb-4">React-Router-Wizard</h1>
          <p className="text-slate-200 text-2xl">React-Router-Wizard is a deployment tool. <div>Makes things easier for a <span className=" text-blue-300">Web Developer</span>.</div></p>
          <p className="text-slate-400 text-3xl">Especially, When you are going to create a single page app <div className="text-2xl">Using <span className="font-medium text-white">React</span> and <span className="font-medium text-white">TailwindCCS</span>.</div></p>
          <p className="text-slate-100 mt-3 text-lg">React-Router-Wizard creates all the required directories for routing, some demo files and builds router setup. </p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
