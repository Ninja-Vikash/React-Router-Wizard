import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

export default App;