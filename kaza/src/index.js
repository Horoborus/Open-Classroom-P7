import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Create React router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/apartement",
    element: <h1>C'est la page apartement</h1>,
  },
  {
    path: "/about",
    element: <h1>Ici La page a propos</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
