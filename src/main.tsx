import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/root/Root";
import Home from "./components/home/Home";
import AppliedJobs from "./pages/appliedJobs/AppliedJobs";
import JobDetails from "./pages/jobDetails/JobDetails";
import ApplyCart from "./pages/applyCart/ApplyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: () => fetch("../jobs.json"),
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs />,
      },
      {
        path: "/application",
        element: <ApplyCart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
