import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import type { Job } from "@/utils/types";

const ApplyCart = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data: Job[]) => setJobs(data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Available Jobs</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{job.job_title}</h2>
            <p className="text-gray-600 mb-4">{job.company_name}</p>
            <p className="text-gray-600 mb-4">Salary: {job.salary}</p>
            <Link
              to={`/job/${job.id}`}
              className="bg-[#7E90FE] text-white px-4 py-2 rounded hover:bg-[#6A7CE0] transition-colors"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplyCart;
