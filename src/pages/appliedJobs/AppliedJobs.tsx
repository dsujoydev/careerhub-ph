import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import type { Job } from "@/utils/types";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState<Job[]>([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("appliedJobs") || "[]");
    setAppliedJobs(storedJobs);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Applied Jobs</h1>
      {appliedJobs.length === 0 ? (
        <p>You haven't applied to any jobs yet.</p>
      ) : (
        <div className="space-y-4">
          {appliedJobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-md p-6 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold mb-2">{job.job_title}</h2>
                <p className="text-gray-600 mb-2">{job.company_name}</p>
                <p className="text-gray-600">Salary: {job.salary}</p>
              </div>
              <Link
                to={`/job/${job.id}`}
                className="bg-[#7E90FE] text-white px-4 py-2 rounded hover:bg-[#6A7CE0] transition-colors"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppliedJobs;
