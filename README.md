<h1 align="center">React-Router-Wizard</h1>

#### About 😃

React-Router-Wizard is an indispensable deployment tool designed to streamline the web development process, particularly when crafting single-page applications using React and Tailwind CSS.

This powerful tool automates the creation of essential directories for seamless routing, generates demo files, and constructs a robust router setup. With React-Router-Wizard, web developers can significantly enhance their workflow, saving time and effort in setting up the intricate routing structure required for modern web applications. Whether you're a seasoned developer or just starting with React and Tailwind CSS, this tool is tailored to simplify your project setup and boost overall productivity.

#### Features 🌟

* Effortless Deployment

    React-Router-Wizard eliminates the hassle of manual setup by providing a single command for deploying your react application with tailwindCSS.

* Directory Structure

    The tool creates a well-organized directory structure, ensuring a clean and scalable project layout. Directories such as "components," and "pages" are automatically generated to maintain the separation of concerns.

* Default Files

    React-Router-Wizard re-writes default files like App.jsx, App.css, and index.css to kickstart your project. Also creates some additional files like in component files Footer.jsx, Navbar.jsx and in page files Home.jsx, About.jsx, Documentation.jsx, Other.jsx. These files are preconfigured with basic settings and examples, allowing you to focus on building your application logic.

* Routing Configuration

    The tool sets up the initial configuration for react, including routing. This ensures that your project is ready for development without additional manual configuration.

#### Folder Structure 🏗️

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
Install dependencies for react-router-dom and tailwindcss
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
To streamline the deployment of all directories and files, update the scripts section in your package.json. ⚙️
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
> Responsibility for deploying all directories and files lies with index.js 💡

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

fs.writeFile('src/components/About.jsx', AboutJSX, ()=>console.log("FILE: About.jsx has been created!"))

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

React-Router-Wizard aims to simplify the initial setup process for React applications using TailwindCSS, enabling Routing Facilities for developers to focus more on building features and less on project configuration.

##### Developed by 👩‍💻🔧 : [Ninja-Vikash](https://github.com/Ninja-Vikash)

#### Crafted with ❤️ and JavaScript magic..

<h3 align="center">Happy Coding🤝!</h3>