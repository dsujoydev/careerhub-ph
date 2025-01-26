import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import type { Job } from "@/utils/types";
import { Briefcase, MapPin, DollarSign, Plus } from "lucide-react";

const ApplyCart = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [appliedJobs, setAppliedJobs] = useState<number[]>([]);

  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data: Job[]) => setJobs(data))
      .catch((error) => console.error("Error fetching jobs:", error));

    const storedAppliedJobs = JSON.parse(localStorage.getItem("appliedJobs") || "[]");
    setAppliedJobs(storedAppliedJobs.map((job: Job) => job.id));
  }, []);

  const handleApply = (job: Job) => {
    const updatedAppliedJobs = [...appliedJobs, job.id];
    setAppliedJobs(updatedAppliedJobs);

    const storedJobs = JSON.parse(localStorage.getItem("appliedJobs") || "[]");
    localStorage.setItem("appliedJobs", JSON.stringify([...storedJobs, job]));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Available Jobs</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">{job.job_title}</h2>
              <p className="text-gray-600 mb-4 flex items-center">
                <Briefcase className="mr-2 h-5 w-5" /> {job.company_name}
              </p>
              <p className="text-gray-600 mb-4 flex items-center">
                <MapPin className="mr-2 h-5 w-5" /> {job.location}
              </p>
              <p className="text-gray-600 mb-4 flex items-center">
                <DollarSign className="mr-2 h-5 w-5" /> {job.salary}
              </p>
            </div>
            <div className="px-6 pb-6 flex justify-between items-center">
              <Link
                to={`/job/${job.id}`}
                className="bg-[#7E90FE] text-white px-4 py-2 rounded-full hover:bg-[#6A7CE0] transition-colors"
              >
                View Details
              </Link>
              <button
                onClick={() => handleApply(job)}
                disabled={appliedJobs.includes(job.id)}
                className={`flex items-center justify-center px-4 py-2 rounded-full transition-colors ${
                  appliedJobs.includes(job.id)
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-green-500 text-white hover:bg-green-600"
                }`}
              >
                {appliedJobs.includes(job.id) ? (
                  "Applied"
                ) : (
                  <>
                    <Plus className="mr-2 h-5 w-5" />
                    Apply
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplyCart;
