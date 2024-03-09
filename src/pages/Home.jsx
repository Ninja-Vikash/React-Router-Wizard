import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";

import reactLogo from "../assets/react.svg";
import tailwindLogo from "../assets/tailwind.svg";
import viteLogo from "../assets/vite.svg";
import logo from '../assets/logo.svg'

const Home = () => {
  return (
    <div className="relative w-full">
      <Navbar />
      <div className="container h-[100vh] bg-slate-950 flex flex-col items-center justify-center">
        <h2 className="text-white text-5xl font-medium mb-4">
          You're on React-Router-Wizard
        </h2>
        <h2 className="text-slate-200">Powered by</h2>

        <div className="mt-5 flex gap-12">
          <a target="_blank" href="https://vitejs.dev/">
            <img
              className="h-36 drop-shadow-[0_0px_5px_#1e40af] hover:drop-shadow-[0_0px_8px_#2563eb]"
              src={viteLogo}
              height={10}
            />
          </a>
          <a target="_blank" href="https://react.dev/">
            <img
              className="h-36 drop-shadow-[0_0px_5px_#1e40af] hover:drop-shadow-[0_0px_8px_#2563eb]"
              src={reactLogo}
              height={10}
              id="react"
            />
          </a>
          <a target="_blank" href="https://tailwindcss.com/">
            <img
              className="h-36 drop-shadow-[0_0px_5px_#1e40af] hover:drop-shadow-[0_0px_8px_#2563eb]"
              src={tailwindLogo}
              height={10}
            />
          </a>
          <a target="_blank" href="https://reactrouter.com/en/main/start/tutorial">
            <img
              className="h-36 drop-shadow-[0_0px_5px_#1e40af] hover:drop-shadow-[0_0px_8px_#2563eb]"
              src={logo}
              height={10}
            />
          </a>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
