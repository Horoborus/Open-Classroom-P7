import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom";
import Apartement from "./Pages/Apartment.js";
import Apropos from "./Pages/About.js";
import HomePage from "./Pages/Home.js";
import Footer from "./Components/Footer.js";
import Navbar from "./Components/Navbar.js";

const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

// Create React router
const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/apropo",
        element: (
          <>
            <Apropos />
          </>
        ),
      },
      {
        path: "/apartement",
        element: <Apartement />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
