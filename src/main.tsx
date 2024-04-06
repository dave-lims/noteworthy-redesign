import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Members from "./pages/Members.tsx";
import Hire from "./pages/Hire.tsx";
import Auditions from "./pages/Auditions.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/members",
    element: <Members />,
  },
  {
    path: "/hire-us",
    element: <Hire />,
  },
  {
    path: "/auditions",
    element: <Auditions />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
