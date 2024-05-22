import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/root/Root";
import Home from "./components/home/Home";
import AppliedJobs from "./pages/appliedJobs/AppliedJobs";
import JobDetails from "./pages/jobDetails/JobDetails";

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
        path: "/job-details",
        element: <JobDetails />,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
