import { useParams, useLoaderData } from "react-router-dom";
import { Job } from "@/utils/types";
// import { useEffect, useState } from "react";

const JobDetails = () => {
  const { id } = useParams<{ id: string }>();
  const jobs = useLoaderData() as Job[];
  const jobId = Number(id);
  const job = jobs.find((j) => j.id === jobId);
  console.log(job);

  return (
    <div>
      <h1>JOb details</h1>

      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3">
          <p>job_description</p>
          <p>job_responsibility</p>
          <p>educational_requirements</p>
          <p>experiences</p>
        </div>

        <div className="border md:col-span-1">
          <span>Job Details</span>
          <hr />
          <p>Salary:</p>
          <p>Job Title</p>
          <span> Contact Information</span>
          <p>Phone:</p>
          <p>Email:</p>
          <p>Address:</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
