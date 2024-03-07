import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Other = () => {
  return (
    <div>
      <Navbar />
      <div className="container h-[100vh] bg-slate-950 flex flex-col items-center justify-center">
        <h1 className="text-5xl mb-3 text-white text-center">Add you content!</h1>
        <p className="w-[80vw] text-white text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem accusantium numquam eum blanditiis nam, dolores sunt! Adipisci dolorum incidunt, pariatur dicta cumque quod eos quibusdam ipsum dolore iusto laudantium cupiditate, omnis totam sunt minima excepturi error id sapiente commodi voluptas! Dolor asperiores odit rem mollitia corporis nulla iste, minima nisi a debitis inventore? Earum, vero esse?</p>
        <Footer />
      </div>
    </div>
  );
};

export default Other;