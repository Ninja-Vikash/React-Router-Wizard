<p align="center">
    <img src="https://github.com/Ninja-Vikash/asset-cloud/blob/main/icon%20%26%20png/react-router-wizard.png" height="160px"/>
</p>
<h1 align="center">React-Router-Wizard</h1>

### About 😃

**React-Router-Wizard** is an indispensable deployment tool designed to streamline the web development process, particularly when crafting single-page applications using **React** and **Tailwind CSS**.

This powerful tool automates the creation of essential directories for seamless routing, generates demo files, and constructs a robust router setup. With React-Router-Wizard, web developers can significantly enhance their workflow, saving time and effort in setting up the intricate routing structure required for modern web applications. Whether you're a seasoned developer or just starting with React and Tailwind CSS, this tool is tailored to simplify your project setup and boost overall productivity.

### Features 🌟

* **Effortless Deployment**
  
    React-Router-Wizard eliminates the hassle of manual setup by providing a single command for deploying your react application with tailwindCSS.

* **Directory Structure**
  
    The tool creates a well-organized directory structure, ensuring a clean and scalable project layout. Directories such as "components," and "pages" are automatically generated to maintain the separation of concerns.

* **Default Files**

    React-Router-Wizard re-writes default files like `App.jsx`, `App.css`, and `index.css` to kickstart your project. Also creates some additional files like in component files `Footer.jsx`, `Navbar.jsx` and in page files `Home.jsx`, `About.jsx`, `Documentation.jsx`, and `Other.jsx`. These files are preconfigured with basic settings and examples, allowing you to focus on building your application logic.

* Routing Configuration

    The tool sets up the initial configuration for react, including routing. This ensures that your project is ready for development without additional manual configuration.

### Folder Structure 🏗️

```
└── 📁myapp
    └── .eslintrc.cjs
    └── .gitignore
    └── index.html
    └── index.js
    └── package-lock.json
    └── package.json
    └── postcss.config.js
    └── 📁public
        └── connect.svg
    └── README.md
    └── 📁src
        └── App.css
        └── App.jsx
        └── 📁assets
            └── code.svg
            └── connect.svg
            └── github.svg
            └── linkedin.svg
            └── react.svg
            └── routing.svg
            └── tailwind.svg
            └── vite.svg
        └── 📁components
            └── Footer.jsx
            └── Navbar.jsx
        └── index.css
        └── main.jsx
        └── 📁pages
            └── About.jsx
            └── Documentation.jsx
            └── Home.jsx
            └── Other.jsx
    └── tailwind.config.js
    └── vite.config.js
```
***
### Getting started 🚀

#### Create a react project using vite
For deploying a react project we will use `vite`

```bash
npm create vite@latest
```

#### Install node_module
For installing `node_module` execute the following command

```bash
npm install
```

#### Install dependencies
Install dependencies for **react-router-dom** and **tailwindcss**
```bash 
npm install react-router-dom -D tailwindcss postcss autoprefixer
```
Initialize tailwindcss
```bash
npx tailwindcss init -p
```
> [!IMPORTANT]\
> Don't forget to install dependencies

#### Update script
To streamline the deployment of all directories and files, update the scripts section in your `package.json`. ⚙️
```json
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "deploy": "node index.js"
  },
```
> [!NOTE]\
> Don't forget to update scripts in `package.json`

#### Create index.js
> [!IMPORTANT]\
> Responsibility for deploying all directories and files lies with `index.js` 💡

```js
import fs, { mkdir } from 'fs'

// -------------------------------- Updating tailwind.config.js -----------------------------------

const configData = `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`
fs.writeFile('tailwind.config.js', configData, ()=>console.log("FILE: tailwind.config.js has been updated!"))

// ------------------------------------------ Creating directory -----------------------------------

mkdir('src/components', ()=>console.log("DIRECTORY: components directory has been created!"))
mkdir('src/pages', ()=>console.log("DIRECTORY: pages directory has been created!"))

// ------------------------------------------ Creating Navbar.jsx ----------------------------------

const NavbarJSX = `import React from "react";
import { Link } from "react-router-dom";
import connectIcon from "../assets/connect.svg";

const Navbar = () => {
  return (
    <nav className="absolute container flex justify-between items-center px-24 bg-indigo-950/10">
      <div className="logo font-bold text-xl text-white">
        <Link to="/" className="flex items-center gap-2">
          <img className="h-8" src={connectIcon} height={10} /> Router-Wizard
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

export default Navbar;`

fs.writeFile('src/components/Navbar.jsx', NavbarJSX, ()=>console.log("FILE: Navbar.jsx has been created!"))

// -------------------------------- Creating Footer.jsx ----------------------------

const FooterJSX = `import React from "react";
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
`

fs.writeFile('src/components/Footer.jsx', FooterJSX, ()=>console.log("FILE: Footer.jsx has been created!"))

// ---------------------------------------- Creating Home.jsx ---------------------------------------

const HomeJSX = `import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";

import reactLogo from "../assets/react.svg";
import tailwindLogo from "../assets/tailwind.svg";
import viteLogo from "../assets/vite.svg";
import routeLogo from "../assets/routing.svg";
import Footer from "../components/Footer";

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
              src={routeLogo}
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
`

fs.writeFile('src/pages/Home.jsx', HomeJSX, ()=>console.log("FILE: Home.jsx has been craeted!"))

// -------------------------------------- Creating About.jsx --------------------------------

const AboutJSX = `
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
`

fs.writeFile('src/pages/About.jsx', AboutJSX, ()=>console.log("FILE: About.jsx has been created!"))

// -------------------------------------- Creating Documentation.jsx ---------------------------------

const DocumentationJSX = `import React from "react";
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
`

fs.writeFile('src/pages/Documentation.jsx', DocumentationJSX, ()=>console.log("FILE: Documentation.jsx has been created!"))

// ---------------------------------------- Creating Other.jsx -----------------------------------------

const OtherJSX = `import React from "react";
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

export default Other;`

fs.writeFile('src/pages/Other.jsx', OtherJSX, ()=>console.log("FILE: Other.jsx has been craeted!"))

// -------------------------------- Updating App.jsx ----------------------------------

const AppJSX = `import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Documentation from "./pages/Documentation";
import Other from "./pages/Other";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    // other pages....
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/documentation",
      element: <Documentation/>
    },
    {
      path: "/other",
      element: <Other/>
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;`

fs.writeFile('src/App.jsx', AppJSX, ()=>console.log("FILE: App.jsx has been updated!"))

// --------------------------------------------------- Updating index.html -----------------------------------

const IndexHTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="This is React-Router-Wizard. which creates directories and files">
    <link rel="shortcut icon" href="/connect.svg" type="image/x-icon">
    <title>React-Router-Wizard</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`

fs.writeFile('index.html', IndexHTML, ()=>console.log("FILE: index.html has been updated!"))

// ------------------------------------------------- Updating index.css -------------------------------------

const IndexCSS =  `@tailwind base;
@tailwind components;
@tailwind utilities;`

fs.writeFile('src/index.css', IndexCSS, ()=>console.log("FILE: index.css has been updated!"))

// ------------------------------------------------- Updating App.css ---------------------------------------

const AppCSS = `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
  margin : 0;
  padding : 0;
  box-sizing : border-box;
  font-family: "Poppins", sans-serif;
}

@keyframes rotate {
  to {
    transform: rotate(1turn);
  }
}

#react {
  animation: rotate linear 20s infinite normal;
}`

fs.writeFile('src/App.css', AppCSS, ()=>console.log("FILE: App.css has been updated!"))

// --------------------------------- Creating svg files ---------------------------------

const codeSVG =  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path></svg>`

const connectSVG = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
<line x1="31.753" x2="18.753" y1="30.5" y2="30.5" fill="none" stroke="#9c34c2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="5"></line><polyline fill="none" stroke="#9c34c2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="5" points="49.003,49 31.753,30.528 49.003,13"></polyline><ellipse cx="32.75" cy="61" opacity=".3" rx="24.5" ry="3"></ellipse><circle cx="15.003" cy="31" r="8" fill="#98c900"></circle><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M10.503,31c0-2.481,2.019-4.5,4.5-4.5"></path><path fill="#fff" d="M15.003,23c-4.418,0-8,3.582-8,8c0,1.771,0.583,3.402,1.557,4.728	c1.994-0.657,3.443-2.514,3.443-4.728c0-1.654,1.346-3,3-3c2.214,0,4.071-1.449,4.728-3.443C18.405,23.583,16.774,23,15.003,23z" opacity=".3"></path><circle cx="49.003" cy="13" r="8" fill="#98c900"></circle><circle cx="49.003" cy="49" r="8" fill="#98c900"></circle><path d="M49.003,57c4.418,0,8-3.582,8-8c0-1.771-0.583-3.402-1.557-4.728	c-1.994,0.657-3.443,2.514-3.443,4.728c0,1.654-1.346,3-3,3c-2.214,0-4.071,1.449-4.728,3.443C45.6,56.417,47.232,57,49.003,57z" opacity=".15"></path>
</svg>`

const githubSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>`

const linkedinSVG = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M25,2c-12.682,0 -23,10.317 -23,23c0,12.683 10.318,23 23,23c12.682,0 23,-10.317 23,-23c0,-12.683 -10.318,-23 -23,-23zM18,35h-4v-15h4zM16,17c-1.105,0 -2,-0.895 -2,-2c0,-1.105 0.895,-2 2,-2c1.105,0 2,0.895 2,2c0,1.105 -0.895,2 -2,2zM37,35h-4v-5v-2.5c0,-1.925 -1.575,-3.5 -3.5,-3.5c-1.925,0 -3.5,1.575 -3.5,3.5v7.5h-4v-15h4v1.816c1.168,-1.122 2.752,-1.816 4.5,-1.816c3.59,0 6.5,2.91 6.5,6.5z"></path></g></g>
</svg>`

const reactSVG = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle>
</svg>`

const routingSVG = `<?xml version="1.0" encoding="utf-8"?>

<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g >
            <rect x="0" y="0" width="24" height="24">

</rect>
            <g transform="translate(2.062500, 2.812500)" fill-rule="nonzero">
                <ellipse fill="#185ABC" cx="1.649625" cy="1.65" rx="1.649625" ry="1.65">

</ellipse>
                <ellipse fill="#185ABC" cx="1.649625" cy="9.1297616" rx="1.649625" ry="1.65">

</ellipse>
                <ellipse fill="#185ABC" cx="1.649625" cy="16.6095232" rx="1.649625" ry="1.65">

</ellipse>
                <circle fill="#185ABC" cx="17.6941875" cy="9.13062371" r="2.0625">

</circle>
                <path d="M4.88925,10.120268 L8.3773125,10.120268 C8.51476433,9.88190788 8.66401604,9.65069595 8.8245,9.4275116 L9.0331875,9.12631314 C8.8145625,8.82511469 8.605875,8.51387629 8.3971875,8.1223183 L4.88925,8.1223183 C4.96522553,8.38052276 5.01190022,8.64661662 5.028375,8.91547423 L5.028375,9.33715206 C5.01273823,9.60282137 4.96603851,9.86568784 4.88925,10.120268 Z" fill="#669DF6">

</path>
                <path d="M11.4380625,6.09424871 L11.2095,5.68261082 L10.93125,5.2207732 L10.494,4.34729768 C9.241875,1.83731057 7.95,0.682716495 5.346375,0.682716495 L4.88925,0.682716495 C4.98314234,1.0088872 5.02999933,1.34703044 5.028375,1.68671134 C5.0302779,2.0264111 4.98341533,2.36459463 4.88925,2.69070619 L5.346375,2.69070619 C6.95625,2.69070619 7.6618125,3.20274356 8.6356875,4.97981443 L8.8741875,5.41153222 L9.1126875,5.89344974 C10.553625,8.80503479 11.5970625,9.90942912 14.011875,10.1503879 C13.932969,9.82166447 13.8929393,9.48464468 13.892625,9.14639304 C13.8937418,8.80690401 13.9405456,8.46914494 14.03175,8.1423982 L14.091375,8.1423982 C12.91875,8.03195876 12.243,7.51992139 11.4380625,6.09424871 Z" fill="#185ABC">

</path>
                <path d="M9.6095625,11.485701 L9.3710625,11.9374987 L8.9934375,12.7005348 L8.7549375,13.1523325 L8.526375,13.5639704 C7.612125,15.1804021 6.896625,15.6522796 5.346375,15.6522796 L4.88925,15.6522796 C4.96690716,15.9100795 5.01361706,16.1763741 5.028375,16.4454356 L5.028375,16.8169137 C5.01277982,17.0858764 4.96608733,17.3520717 4.88925,17.6100696 L5.60475,17.6100696 C7.9996875,17.5397899 9.2915625,16.3751559 10.5735,13.9555284 L11.110125,12.8812539 L11.3188125,12.4896959 L11.4976875,12.1583776 C11.641561,11.9075733 11.8008742,11.6661399 11.9746875,11.4355013 C11.3580959,11.202557 10.7864145,10.862807 10.2853125,10.4315064 C10.032207,10.7638576 9.80621522,11.116413 9.6095625,11.485701 Z" fill="#669DF6">

</path>
            </g>
        </g>
    </g>
</svg>`

const tailwindSVG = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<linearGradient id="iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1" x1="21.861" x2="25.703" y1="8.237" y2="36.552" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00c1e0"></stop><stop offset="1" stop-color="#009bb8"></stop></linearGradient><path fill="url(#iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1)" d="M24,9.604c-5.589,0-9.347,2.439-11.276,7.318c-0.2,0.505,0.417,0.92,0.816,0.551 c2.035-1.882,4.322-2.505,6.86-1.871c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24 c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551c-2.035,1.882-4.322,2.506-6.86,1.872 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-5.589,0-9.348,2.44-11.276,7.319 c-0.2,0.505,0.417,0.92,0.816,0.551c2.035-1.882,4.322-2.506,6.86-1.871c1.825,0.457,3.13,1.781,4.575,3.246 c2.353,2.388,5.077,5.152,11.025,5.152c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551 c-2.035,1.882-4.322,2.506-6.86,1.871c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24L12,24z"></path>
</svg>`

const viteSVG = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<linearGradient id="oOTIjsOjTqJdvfy5S4iCZa_dJjTWMogzFzg_gr1" x1="13.315" x2="38.005" y1="514.906" y2="481.377" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#41d1ff"></stop><stop offset="1" stop-color="#9231be"></stop></linearGradient><path fill="url(#oOTIjsOjTqJdvfy5S4iCZa_dJjTWMogzFzg_gr1)" d="M44.86,9.976L25.023,45.448c-0.41,0.732-1.462,0.737-1.878,0.008L2.915,9.979 C2.462,9.185,3.141,8.223,4.041,8.384l19.859,3.55c0.127,0.023,0.256,0.022,0.383-0.001l19.443-3.544 C44.623,8.225,45.305,9.18,44.86,9.976z"></path><linearGradient id="oOTIjsOjTqJdvfy5S4iCZb_dJjTWMogzFzg_gr2" x1="25.502" x2="37.131" y1="508.764" y2="428.99" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fed100"></stop><stop offset="1" stop-color="#e36001"></stop></linearGradient><path fill="url(#oOTIjsOjTqJdvfy5S4iCZb_dJjTWMogzFzg_gr2)" d="M33.574,3.01L19.019,5.862c-0.239,0.047-0.416,0.25-0.431,0.493l-0.895,15.121 c-0.021,0.356,0.306,0.633,0.654,0.552l4.052-0.935c0.379-0.087,0.722,0.246,0.644,0.628l-1.204,5.895 c-0.081,0.397,0.291,0.736,0.679,0.618l2.503-0.76c0.388-0.118,0.761,0.222,0.679,0.62l-1.913,9.26 c-0.12,0.579,0.651,0.895,0.972,0.398l0.215-0.332l11.86-23.669c0.199-0.396-0.144-0.848-0.579-0.764l-4.171,0.805 c-0.392,0.076-0.725-0.289-0.615-0.673l2.722-9.438C34.301,3.299,33.967,2.933,33.574,3.01z"></path>
</svg>`

setTimeout(() => {
  fs.writeFile('src/assets/code.svg', codeSVG, ()=>console.log("FILE: code.svg has been created!"))
  fs.writeFile('src/assets/connect.svg', connectSVG, ()=>console.log("FILE: connect.svg has been created!"))
  fs.writeFile('src/assets/github.svg', githubSVG, ()=>console.log("FILE: github.svg has been created!"))
  fs.writeFile('src/assets/linkedin.svg', linkedinSVG, ()=>console.log("FILE: linkedin.svg has been created!"))
  fs.writeFile('src/assets/react.svg', reactSVG, ()=>console.log("FILE: react.svg has been created!"))
  fs.writeFile('src/assets/routing.svg', routingSVG, ()=>console.log("FILE: routing.svg has been created!"))
  fs.writeFile('src/assets/tailwind.svg', tailwindSVG, ()=>console.log("FILE: tailwind.svg has been created!"))
  fs.writeFile('src/assets/vite.svg', viteSVG, ()=>console.log("FILE: vite.svg has been created!"))
  fs.writeFile('public/connect.svg', connectSVG, ()=>console.log("FILE: connect.svg has been created!"))
}, 1500);

setTimeout(() => {
  console.log("\nReact-Router-Wizard has been Deployed\nnpm run dev\n")
}, 3000);
/**
 *  Created with Love and Javascript
 */
```

#### Command for deployment

```bash
npm run deploy
```
> [!WARNING]\
> Ensure that you've updated the script in your `package.json` file 🔧

#### Start server 🖥️
```bash
npm run dev
```

**React-Router-Wizard** aims to simplify the initial setup process for React applications using **TailwindCSS**, enabling **Routing** Facilities for developers to focus more on building features and less on project configuration.

##### Developed by 👩‍💻🔧 : [Ninja-Vikash](https://github.com/Ninja-Vikash)

#### Crafted with ❤️ and JavaScript magic..

<h3 align="center">Happy Coding🤝!</h3>
